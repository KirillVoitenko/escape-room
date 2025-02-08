import { combineReducers } from '@reduxjs/toolkit';
import { authorizationReducer } from '@entities/user';
import { globalLoaderReducer } from '@shared/model';
import { mainQuestsListReducer, questExtendedReducer } from '@entities/quest';
import { bookingListSliceReducer } from '@features/booking-list';

export const rootReducer = combineReducers({
  authorization: authorizationReducer,
  loading: globalLoaderReducer,
  mainQuests: mainQuestsListReducer,
  questExtended: questExtendedReducer,
  bookingQuests: bookingListSliceReducer,
});
