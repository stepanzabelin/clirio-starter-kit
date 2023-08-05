import { ClirioHelper, Command, Helper, Module } from 'clirio';
import { injectable } from 'tsyringe';
import { CommonHelpService } from './actions/common-help';
import { VersionHelpService } from './actions/version-help';

@Module()
@injectable()
export class CommonModule {
  constructor(
    private readonly commonHelpService: CommonHelpService,
    private readonly versionHelpService: VersionHelpService,
  ) {}

  @Command('-h, --help', { hidden: true })
  public help(@Helper() helper: ClirioHelper) {
    this.commonHelpService.entry(helper);
  }

  @Command('-v, --version')
  public version() {
    this.versionHelpService.entry();
  }
}
