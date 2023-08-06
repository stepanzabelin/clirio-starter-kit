import {
  ClirioValidationError,
  ClirioPipe,
  PipeContext,
  ClirioHelper,
} from 'clirio';
import { getTypeSchema } from 'joi-class-decorators';

export class CommonPipe implements ClirioPipe {
  transform(data: any, input: PipeContext): any | never {
    const schema = getTypeSchema(input.entity);

    if (Object.keys(schema.describe().keys).length === 0) {
      return data;
    }

    const { error, value } = getTypeSchema(input.entity).validate(data, {
      abortEarly: true,
      allowUnknown: false,
    });

    if (error) {
      const key = error.details[0]?.context?.key;

      const propertyName =
        (key && ClirioHelper.formatKeysFromPipeContext(input, key)) ||
        'unknown';

      throw new ClirioValidationError(error.message, {
        dataType: input.dataType,
        propertyName,
      });
    }

    return value;
  }
}
