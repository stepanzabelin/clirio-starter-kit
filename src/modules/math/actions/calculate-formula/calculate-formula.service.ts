import { CalculateFormulaParamsDto } from './calculate-formula-params.dto';
import { injectable } from 'tsyringe';
import { MathApiService } from '../../services';
import { ResultService } from '../../../../services';

@injectable()
export class CalculateFormulaService {
  constructor(
    private readonly mathApiService: MathApiService,
    private readonly resultService: ResultService,
  ) {}

  public entry(params: CalculateFormulaParamsDto) {
    const result = this.mathApiService.formula(params.formula);
    this.resultService.answer(`RESULT`, result);
  }
}
