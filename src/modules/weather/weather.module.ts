import { Module, Command, Options, Empty, Failure, Params } from 'clirio';
import { injectable } from 'tsyringe';
import { EmptyWeatherService } from './actions/empty-weather';
import { FailureWeatherService } from './actions/failure-weather';
import {
  GetCityWeatherOptionsDto,
  GetCityWeatherParamsDto,
  GetCityWeatherService,
} from './actions/get-city-weather';

@injectable()
@Module('weather')
export class WeatherModule {
  constructor(
    private readonly getCityWeatherService: GetCityWeatherService,
    private readonly emptyWeatherService: EmptyWeatherService,
    private readonly failureWeatherService: FailureWeatherService,
  ) {}

  @Command('get <city>')
  public run(
    @Params() params: GetCityWeatherParamsDto,
    @Options() options: GetCityWeatherOptionsDto,
  ) {
    this.getCityWeatherService.entry(params, options);
  }

  @Empty()
  public empty() {
    this.emptyWeatherService.entry();
  }

  @Failure()
  public failure() {
    this.failureWeatherService.entry();
  }
}
