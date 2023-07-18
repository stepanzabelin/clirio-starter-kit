import { Param } from 'clirio';

export class GetCityMathParamsDto {
  @Param('formula')
  readonly formula!: string;
}
