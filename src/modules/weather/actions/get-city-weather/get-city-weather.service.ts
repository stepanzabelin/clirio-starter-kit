import { GetCityWeatherOptionsDto } from './get-city-weather-options.dto';
import { GetCityWeatherParamsDto } from './get-city-weather-params.dto';
import { injectable } from 'tsyringe';
import { WeatherApiService } from '../../services';
import { ResultService } from '../../../../services';

@injectable()
export class GetCityWeatherService {
  constructor(
    private readonly weatherApiService: WeatherApiService,
    private readonly resultService: ResultService,
  ) {}

  public async entry(
    params: GetCityWeatherParamsDto,
    options: GetCityWeatherOptionsDto,
  ) {
    const result = await this.weatherApiService.getWeather(params.city);

    this.resultService.answer(`Weather in ${params.city}`, result);
  }
}
