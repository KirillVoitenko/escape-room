import { AuthorizationData } from '@entities/user';
import { ObjectSchema, object, string } from 'yup';

const REQUIRED_FIELD_ERROR_MESSAGE = 'Поле обязательно для заполнения';
const PASSWORD_VALIDATION_SETTINGS = {
  pattern: /(\d{1}[a-zA-Z]{1})|([a-zA-Z]{1}\d{1})/,
  min: 3,
  max: 15
};

export const VALIDATION_SCHEMA: ObjectSchema<AuthorizationData> = object({
  email: string().email('Введите корректный email')
    .required(REQUIRED_FIELD_ERROR_MESSAGE),
  password: string().min(PASSWORD_VALIDATION_SETTINGS.min, `Минимальная длина - ${PASSWORD_VALIDATION_SETTINGS.min} символа`)
    .max(PASSWORD_VALIDATION_SETTINGS.max, `Минимальная длина - ${PASSWORD_VALIDATION_SETTINGS.max} символов`)
    .matches(PASSWORD_VALIDATION_SETTINGS.pattern, 'Минимум 1 буква и цифра')
    .required(REQUIRED_FIELD_ERROR_MESSAGE)
});
