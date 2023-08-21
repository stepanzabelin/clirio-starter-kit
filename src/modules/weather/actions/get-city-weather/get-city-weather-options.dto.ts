import { Validate, Clirio, Option } from 'clirio';

export class GetCityWeatherCommandOptionsDto {
  @Option('--city, -c', { description: 'City ​​name' })
  @Validate(Clirio.valid.STRING)
  readonly city!: string;
}
