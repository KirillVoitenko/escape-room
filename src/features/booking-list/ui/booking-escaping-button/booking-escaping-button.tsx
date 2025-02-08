import { Classed } from '@shared/model';
import classNames from 'classnames';
import { JSX, MouseEventHandler } from 'react';

type BookingEscapingButtonProps = Classed<{
  bookingId: string;
  onClick: (bookingId: string) => Promise<void>;
}>

export function BookingEscapingButton({ bookingId, className, onClick }: BookingEscapingButtonProps): JSX.Element {
  const buttonClassName = classNames('btn btn--accent btn--secondary quest-card__btn', className);

  const buttonClickHandler: MouseEventHandler<HTMLButtonElement> = () => {
    onClick(bookingId);
  };

  return (
    <button className={buttonClassName} type='button' onClick={buttonClickHandler} >
      Отменить
    </button>
  );
}
