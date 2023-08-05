import { ClirioValidationError, ClirioPipe, PipeContext } from 'clirio';
import { getTypeSchema } from 'joi-class-decorators';

export class CommonPipe implements ClirioPipe {
  transform(data: any, input: PipeContext): any | never {
    const schema = getTypeSchema(input.entity);

    console.log(input);

    if (Object.keys(schema.describe().keys).length === 0) {
      return data;
    }

    const { error, value } = getTypeSchema(input.entity).validate(data, {
      abortEarly: true,
      allowUnknown: false,
    });

    if (error) {
      const propertyName = error.details[0]?.context?.key;

      const row = input.rows.find((row) => row.propertyName === propertyName);

      throw new ClirioValidationError(error.message, {
        dataType: input.dataType,
        propertyName: error.details[0]?.context?.key ?? 'unknown',
      });
    }

    return value;
  }
}
