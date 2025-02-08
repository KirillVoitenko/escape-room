import type { MapCoordinate } from '@shared/model';

type BookingLocation = {
  address: string;
  coords: MapCoordinate;
}

export enum BookingDate {
  Today = 'today',
  Tomorrow = 'tomorrow',
}

export type QuestBookingSlot = {
  time: string;
  isAvailable: boolean;
}

export type QuestBookingInfo = {
  id: string;
  location: BookingLocation;
  slots: {
    [BookingDate.Today]: QuestBookingSlot[];
    [BookingDate.Tomorrow]: QuestBookingSlot[];
  };
};

export type NewBooking = {
  date: BookingDate;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
}

export type UserBooking<TQuestType> = {
  date: BookingDate;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: BookingLocation;
  quest: TQuestType;
}
