import { BookingDate, NewBooking } from '@entities/booking';
import { BookingFormValue } from '@features/booking-form/model';

type ParsedFormQuestDate = {
  date: BookingDate;
  time: string;
}

const parseFormQuestDate = (questDate: string): ParsedFormQuestDate => {
  const date: BookingDate = questDate.match(BookingDate.Today) ? BookingDate.Today : BookingDate.Tomorrow;
  const time = questDate.replaceAll(date, '')
    .replaceAll('h', ':')
    .replaceAll('m', '');

  return {
    date,
    time
  };
};

export const createNewBooking = (placeId: string, formInfo: BookingFormValue): NewBooking => {
  const parsedQuestDate = parseFormQuestDate(formInfo.date);
  const result: NewBooking = {
    placeId,
    contactPerson: formInfo.personName,
    peopleCount: formInfo.gamersCount ?? 0,
    phone: formInfo.personPhone,
    withChildren: formInfo.hasChildren,
    date: parsedQuestDate.date,
    time: parsedQuestDate.time
  };
  return result;
};
