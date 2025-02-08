import { Layout } from '@widgets/layout';
import { JSX } from 'react';
import { withBrowserTitle } from '@shared/lib/hocs/with-browser-title';
import { PAGE_TITLE, PREVIEW_ATTRIBUTES } from '@pages/bookings-page/config';
import { QuestPreviewImage } from '@shared/ui/quest-preview-image';
import { useAppSelector } from '@shared/lib/redux';
import { BookingList, bookingListSelector } from '@features/booking-list';
import { NoBookingsSection } from '../no-bookings-section';

function BookingsPage(): JSX.Element {
  const bookings = useAppSelector(bookingListSelector);

  return (
    <Layout.Content className='page-content decorated-page'>
      <div className='decorated-page__decor'>
        <QuestPreviewImage
          alt={PREVIEW_ATTRIBUTES.alt}
          src={PREVIEW_ATTRIBUTES.src}
          webpSrc={PREVIEW_ATTRIBUTES.webpSrc}
        />
      </div>
      <div className='container'>
        <div className='page-content__title-wrapper'>
          <h1 className='title title--size-m page-content__title'>
            Мои бронирования
          </h1>
        </div>
        {
          bookings.length > 0
            ? <BookingList bookings={bookings} />
            : <NoBookingsSection />
        }
      </div>
    </Layout.Content>
  );
}

export const BookingPageWithTitle = withBrowserTitle(BookingsPage, PAGE_TITLE);
