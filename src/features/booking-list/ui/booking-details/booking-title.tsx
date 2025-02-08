import { BookingDate } from '@entities/booking';
import { Classed } from '@shared/model';
import classNames from 'classnames';
import { JSX } from 'react';
import { DATE_CAPTIONS } from '@entities/booking';

type BookingDetailsProps = Classed<{
  date: BookingDate;
  time: string;
  address: string;
}>

export function BookingDetails({ date, address, time, className }: BookingDetailsProps): JSX.Element {
  const titleClassName = classNames('quest-card__info', className);
  return (
    <span className={titleClassName}>
      {`[${DATE_CAPTIONS[date].toLowerCase()}, ${time}. ${address}]`}
    </span>
  );
}
