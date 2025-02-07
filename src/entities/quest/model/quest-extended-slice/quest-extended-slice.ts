import { createSlice } from '@reduxjs/toolkit';
import type { BaseFetchedState, Nullable } from '@shared/model';
import { QuestExtended } from '../types';
import { fetchQuestExtended } from './actions';

interface QuestExtendedSliceState extends BaseFetchedState {
  quest: Nullable<QuestExtended>;
}

const INITIAL_STATE: QuestExtendedSliceState = {
  loading: false,
  quest: null
};

const questExtendedSlice = createSlice({
  initialState: INITIAL_STATE,
  name: 'questExtended',
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchQuestExtended.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchQuestExtended.fulfilled, (state, action) => {
      state.loading = false;
      state.quest = action.payload;
    });
    builder.addCase(fetchQuestExtended.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const questExtendedReducer = questExtendedSlice.reducer;
