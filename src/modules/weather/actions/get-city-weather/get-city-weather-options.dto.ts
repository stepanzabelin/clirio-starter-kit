import { Validate, Clirio, Option } from 'clirio';

export class GetCityWeatherOptionsDto {
  @Option('--city, -c', { description: 'City ​​name' })
  @Validate(Clirio.valid.STRING)
  readonly city!: string;
}
