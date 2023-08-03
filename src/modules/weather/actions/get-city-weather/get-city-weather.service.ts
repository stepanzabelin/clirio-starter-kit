import { GetCityWeatherOptionsDto } from './get-city-weather-options.dto';
import { injectable } from 'tsyringe';
import { WeatherApiService } from '../../services';
import { ResultService } from '../../../../services';

@injectable()
export class GetCityWeatherService {
  constructor(
    private readonly weatherApiService: WeatherApiService,
    private readonly resultService: ResultService,
  ) {}

  public async entry(options: GetCityWeatherOptionsDto) {
    const result = await this.weatherApiService.getWeather(options.city);

    this.resultService.answer(`Weather in ${options.city}`, result);
  }
}
