import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Quest } from '../types';
import type { AxiosInstance } from 'axios';
import { ServerEndpoints } from '@shared/model';

enum MainQuestsSliceActionsNames {
  FetchList = 'mainQuestsList/fetch'
}

export const fetchMainQuestsList = createAsyncThunk<
  Quest[],
  undefined,
  {
    extra: AxiosInstance;
  }
>(
  MainQuestsSliceActionsNames.FetchList,
  async (_arg, {extra: api}) => {
    const { data } = await api.get<Quest[]>(ServerEndpoints.Quests);
    return data;
  },
);
