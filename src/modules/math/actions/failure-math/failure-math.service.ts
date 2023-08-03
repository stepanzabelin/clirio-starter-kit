import { injectable } from 'tsyringe';
import { ResultService } from '../../../../services';

@injectable()
export class FailureMathService {
  constructor(private readonly resultService: ResultService) {}

  public entry() {
    this.resultService.warn('The command is wrong. Type --help');
  }
}
