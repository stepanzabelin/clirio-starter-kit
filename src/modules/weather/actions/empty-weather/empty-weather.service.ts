import { injectable } from 'tsyringe';
import { ResultService } from '../../../../services';

@injectable()
export class EmptyWeatherService {
  constructor(private readonly resultService: ResultService) {}

  public entry() {
    this.resultService.note('The command is incomplete. Type --help');
  }
}
