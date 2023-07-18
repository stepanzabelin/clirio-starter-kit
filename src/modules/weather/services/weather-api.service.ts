import { injectable } from 'tsyringe';

@injectable()
export class WeatherApiService {
  constructor() {}

  async getWeather(city: string) {
    return `+${Math.round(Math.random() * 20)}`;
  }
}
