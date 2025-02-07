import { Classed } from '@shared/model';
import classNames from 'classnames';
import { ForwardedRef, forwardRef, JSX, PropsWithChildren } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type PersonalAgreementConfirmProps = Classed<PropsWithChildren<{
  id: string;
  hasError: boolean;
}> & Omit<UseFormRegisterReturn, 'ref'>>;

const ICON_CONFIG = {
  xLink: '#icon-tick',
  size: {
    width: 20,
    height: 17
  }
};

export const CustomCheckbox = forwardRef(
  ({ children, id, className, hasError, ...otherProps }: PersonalAgreementConfirmProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    const inputClassName = classNames(
      'custom-checkbox',
      className,
      {
        'is-invalid': hasError
      }
    );

    return (
      <label className={inputClassName}>
        <input ref={ref} type='checkbox' id={id} {...otherProps} />
        <span className='custom-checkbox__icon'>
          <svg width={ICON_CONFIG.size.width} height={ICON_CONFIG.size.height} aria-hidden>
            <use xlinkHref={ICON_CONFIG.xLink}></use>
          </svg>
        </span>
        <div className='personal-agreement__description'>
          {children}
        </div>
      </label>
    );
  }
);

CustomCheckbox.displayName = 'CustomCheckboxWithRef';
