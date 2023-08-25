import { injectable } from 'tsyringe';

@injectable()
export class WeatherApiService {
  constructor() {}

  async getWeather(city: string) {
    // request to API
    return `+${Math.round(Math.random() * 20)}`;
  }
}
