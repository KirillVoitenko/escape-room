import { ForwardedRef, forwardRef, HTMLInputTypeAttribute, JSX, PropsWithChildren } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import classNames from 'classnames';

type LoginFormInputProps = PropsWithChildren<Omit<UseFormRegisterReturn, 'ref'> & {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  caption: string;
  hasError: boolean;
}>;

export const LoginFormInput = forwardRef(({ name, type, caption, hasError, placeholder, children, ...otherProps }: LoginFormInputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  const inputContainerClassName = classNames(
    'custom-input login-form__input',
    {
      'is-invalid': hasError
    }
  );
  return (
    <div className={inputContainerClassName}>
      <label className='custom-input__label' htmlFor={name}>{caption}</label>
      <input ref={ref} id={name} type={type} aria-invalid={hasError} name={name} placeholder={placeholder} {...otherProps} />
      {children}
    </div>
  );
});

LoginFormInput.displayName = 'LoginFormInput';
