import { ClirioCommonError, ClirioFilter, ClirioValidationError } from 'clirio';
import { injectable } from 'tsyringe';
import { ResultService } from '../services';

@injectable()
export class CommonFilter implements ClirioFilter {
  constructor(private readonly resultService: ResultService) {}

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
