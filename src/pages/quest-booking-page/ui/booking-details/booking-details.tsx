import type { NewBooking, QuestBookingInfo } from '@entities/booking';
import { QuestPreviewImage } from '@shared/ui/quest-preview-image';
import { JSX, useCallback, useState } from 'react';
import { PREVIEW_ATTRIBUTES } from '@pages/quest-booking-page/config';
import { BookingMap } from '../booking-map';
import { BookingForm } from '@features/booking-form';
import { QuestExtended } from '@entities/quest';
import { useAppDispatch } from '@shared/lib/redux';
import { addNewBookingAction } from '@features/booking-list';

type BookingDetailsProps = {
  details: QuestBookingInfo[];
  quest: QuestExtended;
}

export function BookingDetails({ details, quest }: BookingDetailsProps): JSX.Element {
  const [activeDetailId, setActiveDetailId] = useState<string>(details[0].id);
  const dispatch = useAppDispatch();
  const activeDetail = details.find((current) => current.id === activeDetailId);

  const bookingFormSubmitHandler = useCallback(
    async (questId: string, booking: NewBooking): Promise<void> => {
      await dispatch(addNewBookingAction({questId, booking}));
    },
    [dispatch]
  );

  return (
    <>
      <div className='decorated-page__decor' aria-hidden>
        <QuestPreviewImage
          alt={PREVIEW_ATTRIBUTES.alt}
          src={PREVIEW_ATTRIBUTES.src}
          webpSrc={PREVIEW_ATTRIBUTES.webpSrc}
        />
      </div>
      <div className='container container--size-s'>
        <div className='page-content__title-wrapper'>
          <h1 className='subtitle subtitle--size-l page-content__subtitle'>
            Бронирование квеста
          </h1>
          <p className='title title--size-m title--uppercase page-content__title'>
            {quest.title}
          </p>
        </div>
        {activeDetail && (
          <BookingMap
            activeBooking={activeDetail}
            bookings={details}
            onBookingClick={setActiveDetailId}
          />
        )}
        {activeDetail && <BookingForm booking={activeDetail} quest={quest} onSubmit={bookingFormSubmitHandler} />}
      </div>
    </>
  );
}
