import { JSX } from 'react';
import { BookingDate, QuestBookingSlot } from '@entities/booking';
import { Classed } from '@shared/model';
import classNames from 'classnames';
import { createSlotValue } from '@features/booking-form/lib/create-slot-value';

type QuestTimeSlotsProps = Classed<{
  slots: QuestBookingSlot[];
  date: BookingDate;
  renderSlot: (value: string, description: string ,isAvailable: boolean) => JSX.Element;
}>

const DATE_CAPTIONS = {
  [BookingDate.Today]: 'Сегодня',
  [BookingDate.Tomorrow]: 'Завтра'
};

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
