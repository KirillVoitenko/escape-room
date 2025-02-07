import { createSlice } from '@reduxjs/toolkit';
import { BaseFetchedState, Nullable } from '@shared/model';
import { AuthorizationStatusEnum, UserInfo } from '../types';
import {
  checkAuthorizationAction,
  loginAction,
  logoutAction
} from './actions';

interface AuthorizationSliceState extends BaseFetchedState {
  user: Nullable<UserInfo>;
  status: AuthorizationStatusEnum;
}

const INITIAL_STATE: AuthorizationSliceState = {
  loading: false,
  status: AuthorizationStatusEnum.Unknown,
  user: null
};

const authorizationSlice = createSlice({
  initialState: INITIAL_STATE,
  name: 'authorization',
  reducers: {},
  extraReducers(builder) {
    builder.addCase(checkAuthorizationAction.pending, (state) => {
      state.loading = true;
      state.user = null;
    });
    builder.addCase(checkAuthorizationAction.rejected, (state) => {
      state.loading = false;
      state.status = AuthorizationStatusEnum.NoAuthorized;
      state.user = null;
    });
    builder.addCase(checkAuthorizationAction.fulfilled, (state, action) => {
      state.loading = false;
      state.status = action.payload ? AuthorizationStatusEnum.Authorized : AuthorizationStatusEnum.NoAuthorized;
      state.user = action.payload;
    });

    builder.addCase(loginAction.pending, (state) => {
      state.loading = true;
      state.status = AuthorizationStatusEnum.Unknown;
      state.user = null;
    });
    builder.addCase(loginAction.rejected, (state) => {
      state.loading = false;
      state.status = AuthorizationStatusEnum.NoAuthorized;
      state.user = null;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.status = AuthorizationStatusEnum.Authorized;
      state.user = action.payload;
    });

    builder.addCase(logoutAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logoutAction.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(logoutAction.fulfilled, (state) => {
      state.loading = false;
      state.status = AuthorizationStatusEnum.NoAuthorized;
      state.user = null;
    });
  },
});

export const authorizationReducer = authorizationSlice.reducer;
