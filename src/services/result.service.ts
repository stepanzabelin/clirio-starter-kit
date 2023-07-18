import { injectable } from 'tsyringe';
import chalk from 'chalk';

@injectable()
export class ResultService {
  constructor() {}

  public result(text: string, value: any) {
    console.log(chalk.cyan(text + ':'), chalk.green(value));
  }
}
