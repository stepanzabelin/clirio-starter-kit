import { ClirioHelper, Command, Helper, Module } from 'clirio';
import { injectable } from 'tsyringe';
import { CommonHelpService } from './actions/common-help';

@Module()
@injectable()
export class CommonModule {
  constructor(private readonly commonHelpService: CommonHelpService) {}

  @Command('-h, --help', { hidden: true })
  public help(@Helper() helper: ClirioHelper) {
    this.commonHelpService.entry(helper);
  }
}
