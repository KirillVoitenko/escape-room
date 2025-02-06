import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import { getApiInstance } from '@shared/lib/api-instance';
import { configureAxiosInstance } from '@app/api';
import { createRedirectMiddleware } from '@shared/lib/redux';
import { history } from '@app/config/history';

const apiInstance = configureAxiosInstance(getApiInstance());
const redirectMiddleware = createRedirectMiddleware(history);

const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      thunk: {
        extraArgument: apiInstance
      }
    }).concat(redirectMiddleware);
  },
});

export default store;
