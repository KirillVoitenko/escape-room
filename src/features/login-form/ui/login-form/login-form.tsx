import { JSX } from 'react';
import type { AuthorizationData } from '@entities/user';
import { Classed } from '@shared/model';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { LoginFormInput } from '../login-form-input';
import { yupResolver } from '@hookform/resolvers/yup';
import { INITIAL_FORM_VALUES, VALIDATION_SCHEMA } from '@features/login-form/config';

type LoginFormProps = Classed<{
  onSubmit: (data: AuthorizationData) => Promise<void>;
}>

export function LoginForm({ onSubmit, className }: LoginFormProps): JSX.Element {
  const formClassName = classNames('login-form', className);

  const { register, handleSubmit, formState: { errors } } = useForm<AuthorizationData>({
    mode: 'onBlur',
    defaultValues: INITIAL_FORM_VALUES,
    resolver: yupResolver(VALIDATION_SCHEMA)
  });

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
      <div className='login-form__inner-wrapper'>
        <h1 className='title title--size-s login-form__title'>Вход</h1>
        <div className='login-form__inputs'>
          <LoginFormInput
            caption='E – mail'
            placeholder='Адрес электронной почты'
            type='email'
            {...register('email')}
            hasError={!!errors?.email?.message}
          >
            {!!errors?.email?.message && <span role='alert' className='error__message'>{ errors?.email?.message }</span>}
          </LoginFormInput>
          <LoginFormInput
            caption='Пароль'
            placeholder='Пароль'
            type='password'
            {...register('password')}
            hasError={!!errors?.password?.message}
          >
            {!!errors?.password?.message && <span role='alert' className='error__message'>{ errors?.password?.message }</span>}
          </LoginFormInput>
        </div>
        <button className='btn btn--accent btn--general login-form__submit' type='submit'>
          Войти
        </button>
      </div>
    </form>
  );
}
