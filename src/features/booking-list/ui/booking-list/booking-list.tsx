import { deleteBookingAction, QuestBooking } from '@features/booking-list/model';
import { JSX } from 'react';
import { QuestCard } from '@entities/quest';
import { BookingEscapingButton } from '../booking-escaping-button';
import { BookingDetails } from '../booking-details';
import { useAppDispatch } from '@shared/lib/redux';

type BookingListProps = {
  bookings: QuestBooking[];
}

export function BookingList({ bookings }: BookingListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const deleteBookingButtonClickHandler = async (bookingId: string): Promise<void> => {
    await dispatch(deleteBookingAction(bookingId));
  };

  return (
    <div className='cards-grid'>
      {bookings.map((current) => (
        <QuestCard quest={current.quest}
          key={current.id}
          extraInfo={
            <BookingDetails
              address={current.location.address}
              date={current.date}
              time={current.time}
            />
          }
          questAction={
            <BookingEscapingButton
              bookingId={current.id}
              onClick={deleteBookingButtonClickHandler}
            />
          }
        />
      ))}
    </div>
  );
}
