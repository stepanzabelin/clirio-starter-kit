import {
  Module,
  Command,
  Options,
  Empty,
  Failure,
  Hidden,
  Params,
} from 'clirio';
import { injectable } from 'tsyringe';
import { EmptyMathService } from './actions/empty-math';
import { FailureMathService } from './actions/failure-math';
import {
  GetCityMathOptionsDto,
  GetCityMathParamsDto,
  GetCityMathService,
} from './actions/get-city-math';

@injectable()
@Module('math')
export class MathModule {
  constructor(
    private readonly getCityMathService: GetCityMathService,
    private readonly emptyMathService: EmptyMathService,
    private readonly failureMathService: FailureMathService
  ) {}

  @Command('<formula>')
  public run(
    @Params() params: GetCityMathParamsDto,
    @Options() options: GetCityMathOptionsDto
  ) {
    this.getCityMathService.entry(params, options);
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
