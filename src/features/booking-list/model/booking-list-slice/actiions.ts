import { createAsyncThunk } from '@reduxjs/toolkit';
import type { QuestBooking } from '../types';
import type { AxiosInstance } from 'axios';
import { AppDispatch, RoutesEnum, ServerEndpoints } from '@shared/model';
import { NewBooking } from '@entities/booking';
import { generatePath } from 'react-router-dom';
import { redirectToRouteAction } from '@shared/lib/redux';

enum BookingQuestsSliceActionsNames {
  FetchList = 'bookingQuestsList/fetch',
  AddNewBooking = 'bookingQuestsList/addNewBooking',
  DeleteBooking = 'bookingQuestsList/deleteBooking'
}

type AddNewBookingActionArgument = {
  questId: string;
  booking: NewBooking;
}

export const fetchBookingQuestsListAction = createAsyncThunk<
  QuestBooking[],
  undefined,
  {
    extra: AxiosInstance;
  }
>(
  BookingQuestsSliceActionsNames.FetchList,
  async (_arg, {extra: api}) => {
    const { data } = await api.get<QuestBooking[]>(ServerEndpoints.UserBookings);
    return data;
  },
);

export const addNewBookingAction = createAsyncThunk<
  QuestBooking,
  AddNewBookingActionArgument,
  {
    dispatch: AppDispatch;
    extra: AxiosInstance;
  }
>(
  BookingQuestsSliceActionsNames.AddNewBooking,
  async (bookingData, {extra: api, dispatch}) => {
    const requestUrl = generatePath(ServerEndpoints.QuestBookings, {questId: bookingData.questId});
    const { data } = await api.post<QuestBooking>(requestUrl, bookingData.booking);
    dispatch(redirectToRouteAction({
      route: RoutesEnum.UserQuests,
      replace: true,
    }));
    return data;
  },
);

export const deleteBookingAction = createAsyncThunk<
  string,
  string,
  {
    extra: AxiosInstance;
  }
>(
  BookingQuestsSliceActionsNames.DeleteBooking,
  async (reservationId, {extra: api}) => {
    const requestUrl = generatePath(ServerEndpoints.Booking, {reservationId });
    await api.delete<QuestBooking[]>(requestUrl);
    return reservationId;
  },
);
