import { createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import type { QuestExtended } from '../types';
import type { AxiosError, AxiosInstance } from 'axios';
import { AppDispatch, RoutesEnum, ServerEndpoints } from '@shared/model';
import { generatePath } from 'react-router-dom';
import { redirectToRouteAction } from '@shared/lib/redux';
import { StatusCodes } from 'http-status-codes';

enum QuestExtendedSliceActionsNames {
  FetchQuest = 'questExtended/fetch',
}

export const fetchQuestExtended = createAsyncThunk<
  QuestExtended,
  string,
  {
    dispatch: AppDispatch;
    extra: AxiosInstance;
    rejectValue: SerializedError;
  }
>(
  QuestExtendedSliceActionsNames.FetchQuest,
  async (questId, {extra: api, dispatch }) => {
    const questUrl = generatePath(ServerEndpoints.QuestExtended, { questId });

    try {
      const { data } = await api.get<QuestExtended>(questUrl);
      return data;
    } catch (err) {
      const typedError: AxiosError = err as AxiosError;
      if (typedError?.response?.status === StatusCodes.NOT_FOUND.valueOf()) {
        dispatch(redirectToRouteAction({ route: RoutesEnum.NotFound, replace: true }));
      }
      throw typedError;
    }
  },
);
