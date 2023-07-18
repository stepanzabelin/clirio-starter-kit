import { GetCityMathOptionsDto } from './get-city-math-options.dto';
import { GetCityMathParamsDto } from './get-city-math-params.dto';
import { injectable, inject } from 'tsyringe';
import { MathApiService } from '../../services';
import { evaluate } from 'mathjs';
import { ClirioError } from 'clirio';
import chalk from 'chalk';

@injectable()
export class GetCityMathService {
  constructor(private readonly mathApiService: MathApiService) {}

  public entry(params: GetCityMathParamsDto, options: GetCityMathOptionsDto) {
    try {
      const result = evaluate(params.formula);
      console.log(chalk.bgBlackBright('RESULT:'), chalk.green(result));
    } catch (err: any) {
      throw new ClirioError(`The formula has error: ${err.message}`, {
        errCode: 'WRONG_FORMULA',
      });
    }
  }
}
