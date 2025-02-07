import { QuestBookingInfo } from '@entities/booking';
import { MapPoint } from '@shared/model';
import { LeafletMap } from '@shared/ui/leaflet-map';
import { JSX } from 'react';

type BookingMapProps = {
  bookings: QuestBookingInfo[];
  activeBooking: QuestBookingInfo;
  onBookingClick: (bookingId: string) => void;
}

type GetMapPointsReturn = {
  points: MapPoint[];
  center: MapPoint;
}

const createMapPointByDetail = (detail: QuestBookingInfo): MapPoint => ({
  id: detail.id,
  position: detail.location.coords,
  title: detail.location.address
});

const getMapPoints = (details: QuestBookingInfo[], centerDetail: QuestBookingInfo): GetMapPointsReturn => ({
  points: details.map(createMapPointByDetail),
  center: createMapPointByDetail(centerDetail)
});

export function BookingMap({ activeBooking, bookings, onBookingClick }: BookingMapProps): JSX.Element {
  const selectedPoint = createMapPointByDetail(activeBooking);
  const additionalPoints = getMapPoints(bookings, bookings[0]);
  return (
    <div className='page-content__item'>
      <LeafletMap
        className='booking-map'
        onPointClick={onBookingClick}
        selectedPoint={selectedPoint}
        center={additionalPoints.center}
        points={additionalPoints.points}
      >
        <p className='booking-map__address'>
          Вы&nbsp;выбрали: {activeBooking.location.address}
        </p>
      </LeafletMap>
    </div>
  );
}
