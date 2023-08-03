import { SumMathParamsDto } from './sum-math-params.dto';
import { injectable } from 'tsyringe';
import { ResultService } from '../../../../services';

@injectable()
export class SumMathService {
  constructor(private readonly resultService: ResultService) {}

  public entry(params: SumMathParamsDto) {
    const result = params.first + params.second;
    this.resultService.answer(`RESULT`, result);
  }
}
