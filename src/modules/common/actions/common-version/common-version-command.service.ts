import { injectable } from 'tsyringe';
import { readFile, lstat } from 'fs/promises';
import path from 'path';
import { ResultService } from '../../../../services';
import { ClirioCommonError } from 'clirio';

@injectable()
export class CommonVersionCommandService {
  constructor(private readonly resultService: ResultService) {}

  public async entry() {
    const packagePath = await this.findPackageJson();

    if (!packagePath) {
      throw new ClirioCommonError(`package.json not found`, {
        code: 'BROKEN_CODE',
      });
    }

    const contents = await readFile(packagePath, 'utf8');

    const packageData = JSON.parse(contents);

    this.resultService.success(packageData.version);
  }

  public async findPackageJson() {
    const scriptDir = __dirname;
    const maxPath = process.cwd();

    let currentDir = scriptDir;

    while (this.matchPath(currentDir, maxPath)) {
      const potentialPackageJsonPath = path.join(currentDir, 'package.json');

      const exists = await lstat(potentialPackageJsonPath)
        .then(() => true)
        .catch(() => false);

      if (exists) {
        return potentialPackageJsonPath;
      }

      currentDir = path.dirname(currentDir);
    }

    return null;
  }

  matchPath(currentDir: string, maxPath: string) {
    const resolvedCurrentDir = path.resolve(currentDir);
    const resolvedMaxPath = path.resolve(maxPath);
    return resolvedCurrentDir.startsWith(resolvedMaxPath);
  }
}
