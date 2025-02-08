import { createSlice } from '@reduxjs/toolkit';
import { BaseFetchedState } from '@shared/model';
import { QuestBooking } from '../types';
import { fetchBookingQuestsListAction, addNewBookingAction, deleteBookingAction } from './actiions';

interface BookingListState extends BaseFetchedState {
  bookings: QuestBooking[];
}

const INITIAL_STATE: BookingListState = {
  bookings: [],
  loading: false
};

const bookingListSlice = createSlice({
  name: 'bookingList',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBookingQuestsListAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBookingQuestsListAction.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchBookingQuestsListAction.fulfilled, (state, action) => {
      state.loading = false;
      state.bookings = action.payload;
    });

    builder.addCase(addNewBookingAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addNewBookingAction.fulfilled, (state, action) => {
      state.loading = false;
      state.bookings.push(action.payload);
    });
    builder.addCase(addNewBookingAction.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(deleteBookingAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteBookingAction.fulfilled, (state, action) => {
      state.loading = false;
      state.bookings = state.bookings.filter((current) => current.id !== action.payload);
    });
    builder.addCase(deleteBookingAction.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const bookingListSliceReducer = bookingListSlice.reducer;
