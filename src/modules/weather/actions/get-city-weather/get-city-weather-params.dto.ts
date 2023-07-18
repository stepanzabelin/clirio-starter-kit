import { Param } from 'clirio';

export class GetCityWeatherParamsDto {
  @Param('city')
  readonly city!: string;
}
