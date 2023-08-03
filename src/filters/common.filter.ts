import { ClirioCommonError, ClirioFilter, ClirioValidationError } from 'clirio';
import { ResultService } from '../services';

export class CommonFilter implements ClirioFilter {
  private readonly resultService = new ResultService();

  catch(
    error: Error | ClirioCommonError | ClirioValidationError,
  ): void | never {
    if (error instanceof ClirioValidationError) {
      this.resultService.warn(error.message);
      process.exit(9);
    }

    if (error instanceof ClirioCommonError) {
      let message;

      switch (error.errCode) {
        case 'INCORRECT_COMMAND':
          message = 'Incorrect command specified. Type --help';
          break;

        default:
          message = error.message;
          break;
      }

      this.resultService.error(message);
      process.exit(5);
    }

    this.resultService.error(error.message);

    process.exit(1);
  }
}
