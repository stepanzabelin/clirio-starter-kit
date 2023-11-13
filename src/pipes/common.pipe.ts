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
      const propertyName = error.details[0]?.context?.key;

      const parameter =
        propertyName &&
        ClirioHelper.getFormattedInputKey(
          input.entity,
          input.dataType,
          propertyName,
        );

      let message = error.message;

      if (parameter) {
        message = message.replace(
          `"${propertyName}"`,
          `The "${parameter}" in ${input.dataType}`,
        );
      }

      throw new ClirioValidationError(message, {
        dataType: input.dataType,
      });
    }

    return value;
  }
}
