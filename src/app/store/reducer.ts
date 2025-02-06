import { combineReducers } from '@reduxjs/toolkit';
import { authorizationReducer } from '@entities/user';
import { globalLoaderReducer } from '@shared/model';

export const rootReducer = combineReducers({
  authorization: authorizationReducer,
  loading: globalLoaderReducer
});
