import { Transform, Validate, Clirio, Option } from 'clirio';

export class GetCityWeatherOptionsDto {
  @Option('--env, -e')
  @Validate(Clirio.valid.KEY_VALUE)
  @Transform(Clirio.form.KEY_VALUE)
  readonly envs?: Record<string, string>;

  @Option('--silent, -s')
  @Validate([Clirio.valid.OPTIONAL, Clirio.valid.NULL])
  readonly silent?: boolean;
}
