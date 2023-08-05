import { injectable } from 'tsyringe';
import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { ResultService } from '../../../../services';

@injectable()
export class VersionHelpService {
  constructor(private readonly resultService: ResultService) {}

  public async entry() {
    const result = await readFile(
      resolve(process.cwd(), './package.json'),
      'utf8',
    ).then((contents) => JSON.parse(contents));

    this.resultService.success(result.version);
  }
}
