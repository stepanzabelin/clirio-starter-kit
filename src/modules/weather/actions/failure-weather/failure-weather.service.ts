import { injectable } from 'tsyringe';
import { ResultService } from '../../../../services';

@injectable()
export class FailureWeatherService {
  constructor(private readonly resultService: ResultService) {}

  public entry() {
    this.resultService.warn('There is no such a command!');
  }
}
