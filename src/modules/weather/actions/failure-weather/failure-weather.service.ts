import { injectable } from 'tsyringe';
import { ResultService } from '../../../../services';

@injectable()
export class FailureWeatherService {
  constructor(private readonly resultService: ResultService) {}

  public entry() {
    this.resultService.note('There is no such a command!');
  }
}
