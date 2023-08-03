import { Module, Command, Options, Empty, Failure } from 'clirio';
import { injectable } from 'tsyringe';
import { EmptyWeatherService } from './actions/empty-weather';
import { FailureWeatherService } from './actions/failure-weather';
import {
  GetCityWeatherOptionsDto,
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

  @Command('get')
  public run(@Options() options: GetCityWeatherOptionsDto) {
    this.getCityWeatherService.entry(options);
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
