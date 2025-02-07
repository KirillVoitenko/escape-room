import { QuestType, type MapCoordinate, type QuestLevel } from '@shared/model';

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

export type UserBookingQuestInfo = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: QuestLevel;
  type: QuestType;
  peopleMinMax: [number, number];
}

export type UserBooking = {
  date: BookingDate;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: BookingLocation;
  quest: UserBookingQuestInfo;
}
