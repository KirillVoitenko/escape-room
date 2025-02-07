import { BookingDate } from '@entities/booking';

export const createSlotValue = (date: BookingDate, time: string): string => {
  const formattedTime = time.replace(':', 'h').concat('m');

  return `${date}${formattedTime}`;
};
