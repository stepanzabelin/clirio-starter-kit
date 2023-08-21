import { Module, Command, Empty, Failure, Params } from 'clirio';
import { injectable } from 'tsyringe';
import { MathEmptyCommandService } from './actions/math-empty';
import { MathFailureService } from './actions/math-failure';
import {
  CalculateFormulaParamsDto,
  CalculateFormulaCommandService,
} from './actions/calculate-formula';
import { SumMathParamsDto, SumMathCommandService } from './actions/sum-math';

@injectable()
@Module('math')
export class MathModule {
  constructor(
    private readonly calculateFormulaCommandService: CalculateFormulaCommandService,
    private readonly sumMathCommandService: SumMathCommandService,
    private readonly mathEmptyCommandService: MathEmptyCommandService,
    private readonly mathFailureService: MathFailureService,
  ) {}

  @Command('formula <formula>')
  public formula(@Params() params: CalculateFormulaParamsDto) {
    this.calculateFormulaCommandService.entry(params);
  }

  @Command('sum <first-argument> <second-argument>')
  public sum(@Params() params: SumMathParamsDto) {
    this.sumMathCommandService.entry(params);
  }

  @Empty()
  public empty() {
    this.mathEmptyCommandService.entry();
  }

  @Failure()
  public failure() {
    this.mathFailureService.entry();
  }
}
