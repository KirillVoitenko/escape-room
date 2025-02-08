import { BookingFormValue } from '../model';
import { ObjectSchema, object, string, boolean, number } from 'yup';

enum DefaultErrorMessage {
  FieldRequired = 'Поле обязательно',
  FormatError = 'Некорректный формат',
}

export const createValidationSchema = (minGamersCount: number, maxGamersCount: number): ObjectSchema<BookingFormValue> => object({
  date: string()
    .required(DefaultErrorMessage.FieldRequired),
  personName: string()
    .matches(/[А-Яа-яЁёA-Za-z'\- ]{1,}/, DefaultErrorMessage.FormatError)
    .min(1, 'Минимум 1 символ')
    .max(15, 'Максимум 15 символов')
    .required(DefaultErrorMessage.FieldRequired),
  personPhone: string()
    .matches(/[0-9]{10,}/, DefaultErrorMessage.FormatError)
    .required(DefaultErrorMessage.FieldRequired),
  gamersCount: number()
    .integer('Только целое число')
    .typeError('Поле должно быть числом')
    .min(minGamersCount, `Минимальное число участников - ${minGamersCount}`)
    .max(maxGamersCount, `Максимальное число участников - ${maxGamersCount}`)
    .required(DefaultErrorMessage.FieldRequired),
  hasChildren: boolean()
    .required(DefaultErrorMessage.FieldRequired),
  personalAgreementConfirm: boolean()
    .required(DefaultErrorMessage.FieldRequired)
    .isTrue(DefaultErrorMessage.FieldRequired)
});
