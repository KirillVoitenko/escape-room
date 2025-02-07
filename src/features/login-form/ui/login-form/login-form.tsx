import { JSX } from 'react';
import type { AuthorizationData } from '@entities/user';
import { Classed } from '@shared/model';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { TextInput } from '@shared/ui/text-input';
import { yupResolver } from '@hookform/resolvers/yup';
import { INITIAL_FORM_VALUES, VALIDATION_SCHEMA } from '@features/login-form/config';
import type { LoginFormData } from '@features/login-form/model';
import { CustomCheckbox } from '@shared/ui/custom-checkbox';

type LoginFormProps = Classed<{
  onSubmit: (data: AuthorizationData) => Promise<void>;
}>

export function LoginForm({ onSubmit, className }: LoginFormProps): JSX.Element {
  const formClassName = classNames('login-form', className);

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<LoginFormData>({
    mode: 'onBlur',
    defaultValues: INITIAL_FORM_VALUES,
    resolver: yupResolver(VALIDATION_SCHEMA)
  });

  const formSubmitHandler = (data: LoginFormData): void => {
    onSubmit({
      email: data.email,
      password: data.password
    });
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className={formClassName} onSubmit={handleSubmit(formSubmitHandler)}>
      <div className='login-form__inner-wrapper'>
        <h1 className='title title--size-s login-form__title'>Вход</h1>
        <div className='login-form__inputs'>
          <TextInput
            className='login-form__input'
            caption='E – mail'
            placeholder='Адрес электронной почты'
            type='email'
            {...register('email')}
            hasError={!!errors?.email?.message}
          >
            {!!errors?.email?.message && <span role='alert' className='error__message'>{errors.email.message}</span>}
          </TextInput>
          <TextInput
            className='login-form__input'
            caption='Пароль'
            placeholder='Пароль'
            type='password'
            {...register('password')}
            hasError={!!errors?.password?.message}
          >
            {!!errors?.password?.message && <span role='alert' className='error__message'>{errors.password.message}</span>}
          </TextInput>
        </div>
        <button
          className='btn btn--accent btn--general login-form__submit'
          type='submit'
          disabled={!isValid}
        >
          Войти
        </button>
      </div>
      <CustomCheckbox
        id='id-order-agreement'
        hasError={!!errors?.personalAgreementConfirm?.message}
        className='login-form__checkbox'
        {...register('personalAgreementConfirm')}
      >
        <>
          <span className='custom-checkbox__label'>
            Я&nbsp;согласен с <a className='link link--active-silver link--underlined' href='#'>правилами обработки персональных данных</a>
            &nbsp;и пользовательским соглашением
          </span>
          {!!errors?.personalAgreementConfirm?.message && <span role='alert' className='error__message'>{errors.personalAgreementConfirm.message}</span>}
        </>
      </CustomCheckbox>
    </form>
  );
}
