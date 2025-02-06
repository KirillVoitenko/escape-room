import { combineReducers } from '@reduxjs/toolkit';
import { authorizationReducer } from '@entities/user';
import { globalLoaderReducer } from '@shared/model';
import { mainQuestsListReducer } from '@entities/quest';

export const rootReducer = combineReducers({
  authorization: authorizationReducer,
  loading: globalLoaderReducer,
  mainQuests: mainQuestsListReducer
});
