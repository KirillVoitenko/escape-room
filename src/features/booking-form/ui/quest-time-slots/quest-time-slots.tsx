import { JSX } from 'react';
import { BookingDate, QuestBookingSlot } from '@entities/booking';
import { Classed } from '@shared/model';
import classNames from 'classnames';
import { createSlotValue } from '@features/booking-form/lib/create-slot-value';
import { DATE_CAPTIONS } from '@entities/booking';

type QuestTimeSlotsProps = Classed<{
  slots: QuestBookingSlot[];
  date: BookingDate;
  renderSlot: (value: string, description: string ,isAvailable: boolean) => JSX.Element;
}>

export function QuestTimeSlots({ slots, date, className, renderSlot }: QuestTimeSlotsProps): JSX.Element {
  const fieldSetClassName = classNames('booking-form__date-section', className);

  return (
    <fieldset className={fieldSetClassName}>
      <legend className='booking-form__date-title'>
        {DATE_CAPTIONS[date]}
      </legend>
      <div className='booking-form__date-inner-wrapper'>
        {slots.map((current) => {
          const slotValue = createSlotValue(date, current.time);
          return renderSlot(slotValue, current.time, current.isAvailable);
        })}
      </div>
    </fieldset>
  );
}
