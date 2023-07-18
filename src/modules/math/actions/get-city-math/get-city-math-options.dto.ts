import { Transform, Validate, Clirio, Option } from 'clirio';

export class GetCityMathOptionsDto {
  @Option('--silent, -s')
  @Validate(Clirio.valid('NULL'))
  readonly silent?: boolean;
}
