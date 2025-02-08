import type { RootState } from '@shared/model';

type BookingListPickedState = Pick<RootState, 'bookingQuests'>;

export const bookingLoadingSelector = (state: BookingListPickedState) => state.bookingQuests.loading;
export const bookingListSelector = (state: BookingListPickedState) => state.bookingQuests.bookings;
