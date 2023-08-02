import { Param } from 'clirio';

export class CalculateFormulaParamsDto {
  @Param('formula')
  readonly formula!: string;
}
