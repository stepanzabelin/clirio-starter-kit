import { Module, Command, Options, Empty, Failure } from 'clirio';
import { injectable } from 'tsyringe';
import { WeatherEmptyCommandService } from './actions/weather-empty';
import { WeatherFailureCommandService } from './actions/weather-failure';
import {
  GetCityWeatherCommandOptionsDto,
  GetCityWeatherCommandService,
} from './actions/get-city-weather';

@injectable()
@Module('weather')
export class WeatherModule {
  constructor(
    private readonly getCityWeatherCommandService: GetCityWeatherCommandService,
    private readonly weatherEmptyCommandService: WeatherEmptyCommandService,
    private readonly weatherFailureCommandService: WeatherFailureCommandService,
  ) {}

  @Command('get')
  public run(@Options() options: GetCityWeatherCommandOptionsDto) {
    this.getCityWeatherCommandService.entry(options);
  }

  @Empty()
  public empty() {
    this.weatherEmptyCommandService.entry();
  }

  @Failure()
  public failure() {
    this.weatherFailureCommandService.entry();
  }
}
