import { ClirioHelper } from 'clirio';
import { injectable } from 'tsyringe';
import { ResultService } from '../../../../services';

@injectable()
export class CommonHelpService {
  constructor(private readonly resultService: ResultService) {}

  public entry(helper: ClirioHelper) {
    const dump = helper.dumpAll();
    const contents = ClirioHelper.formatDump(dump);
    this.resultService.log('\n' + contents);
  }
}
