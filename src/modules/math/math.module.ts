import { Module, Command, Empty, Failure, Params } from 'clirio';
import { injectable } from 'tsyringe';
import { EmptyMathService } from './actions/empty-math';
import { FailureMathService } from './actions/failure-math';
import {
  CalculateFormulaParamsDto,
  CalculateFormulaService,
} from './actions/calculate-formula';

@injectable()
@Module('math')
export class MathModule {
  constructor(
    private readonly calculateFormulaService: CalculateFormulaService,
    private readonly emptyMathService: EmptyMathService,
    private readonly failureMathService: FailureMathService,
  ) {}

  @Command('<formula>')
  public run(@Params() params: CalculateFormulaParamsDto) {
    this.calculateFormulaService.entry(params);
  }

  @Empty()
  public empty() {
    this.emptyMathService.entry();
  }

  @Failure()
  public failure() {
    this.failureMathService.entry();
  }
}
