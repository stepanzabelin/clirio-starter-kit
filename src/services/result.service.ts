import { injectable } from 'tsyringe';
import chalk from 'chalk';

@injectable()
export class ResultService {
  constructor() {}

  public error(message: string) {
    // eslint-disable-next-line no-console
    console.log(chalk.red(message));
  }

  public warn(message: string) {
    // eslint-disable-next-line no-console
    console.log(chalk.yellow(message));
  }

  public answer(label: string, value: any) {
    // eslint-disable-next-line no-console
    console.log(chalk.cyan(label + ':'), chalk.green(value));
  }

  public result(label: string, value: any) {
    // eslint-disable-next-line no-console
    console.log(chalk.cyan(label + ':'), chalk.green(value));
  }

  public log(message: string) {
    // eslint-disable-next-line no-console
    console.log(message);
  }
}
