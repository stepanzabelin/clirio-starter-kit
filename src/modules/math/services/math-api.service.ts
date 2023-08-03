import { injectable } from 'tsyringe';
import { evaluate } from 'mathjs';
import { ClirioCommonError } from 'clirio';

@injectable()
export class MathApiService {
  formula(formula: string) {
    try {
      const result = evaluate(formula);
      return result;
    } catch (err: any) {
      throw new ClirioCommonError(`The formula has error: ${err.message}`, {
        errCode: 'WRONG_FORMULA',
      });
    }
  }
}
