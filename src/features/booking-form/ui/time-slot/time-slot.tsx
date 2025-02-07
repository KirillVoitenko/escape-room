import { Classed } from '@shared/model';
import classNames from 'classnames';
import { ForwardedRef, forwardRef, JSX } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type TimeSlotProps = Classed<{
  //isActive: boolean;
  isAvailable: boolean;
  value: string;
  description: string;
}> & Omit<UseFormRegisterReturn, 'ref'>;

export const TimeSlot = forwardRef((props: TimeSlotProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  const { description, isAvailable, className, value, ...otherProps } = props;
  const labelClassName = classNames('custom-radio booking-form__date', className);
  return (
    <label className={labelClassName}>
      <input ref={ref} type='radio' id={value} value={value} {...otherProps} disabled={!isAvailable} />
      <span className='custom-radio__label'>{description}</span>
    </label>
  );
});

TimeSlot.displayName = 'QuestTimeSlotWithForwardedRef';
