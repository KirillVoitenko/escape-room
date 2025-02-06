import { createSlice } from '@reduxjs/toolkit';
import { BaseQuestsListState, Quest } from '../types';
import { fetchMainQuestsList } from './actions';

const INITIAL_STATE: BaseQuestsListState<Quest> = {
  loading: false,
  quests: []
};

const questsListSlice = createSlice({
  name: 'mainQuestsList',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMainQuestsList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMainQuestsList.fulfilled, (state, action) => {
      state.loading = false;
      state.quests = action.payload;
    });
    builder.addCase(fetchMainQuestsList.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const mainQuestsListReducer = questsListSlice.reducer;
