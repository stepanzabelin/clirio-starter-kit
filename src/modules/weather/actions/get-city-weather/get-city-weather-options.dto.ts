import { Validate, Clirio, Option } from 'clirio';

export class GetCityWeatherOptionsDto {
  @Option('--city, -c')
  @Validate(Clirio.valid.STRING)
  readonly city!: string;
}
