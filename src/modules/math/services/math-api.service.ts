import { injectable } from 'tsyringe';

@injectable()
export class MathApiService {
  request(city: string) {
    return `city: ${city}`;
  }
}
