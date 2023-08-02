import { ClirioCommonError } from 'clirio';
import chalk from 'chalk';
import { CalculateFormulaParamsDto } from './calculate-formula-params.dto';
import { injectable } from 'tsyringe';
import { MathApiService } from '../../services';
import { evaluate } from 'mathjs';

@injectable()
export class CalculateFormulaService {
  constructor(private readonly mathApiService: MathApiService) {}

  public entry(params: CalculateFormulaParamsDto) {
    try {
      const result = evaluate(params.formula);
      console.log(chalk.bgBlackBright('RESULT:'), chalk.green(result));
    } catch (err: any) {
      throw new ClirioCommonError(`The formula has error: ${err.message}`, {
        errCode: 'WRONG_FORMULA',
      });
    }
  }
}
