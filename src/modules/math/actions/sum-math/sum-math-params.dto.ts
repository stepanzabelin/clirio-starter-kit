import { Param } from 'clirio';
import Joi from 'joi';
import { JoiSchema } from 'joi-class-decorators';

export class SumMathParamsDto {
  @Param()
  @JoiSchema(Joi.number().required())
  readonly first!: number;

  @Param()
  @JoiSchema(Joi.number().required())
  readonly second!: number;
}
