import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch, Nullable } from '@shared/model';
import { tokenServiceInstance } from '@shared/lib/token-service';
import type { AxiosInstance } from 'axios';
import type { UserInfo, UserCheckResult, AuthorizationData } from '../types';
import { RoutesEnum, ServerEndpoints } from '@shared/model';
import { redirectToRouteAction } from '@shared/lib/redux';

enum AuthorizationActions {
  Check = 'authorization/check',
  Login = 'authorization/login',
  Logout = 'authorization/logout'
}

export const checkAuthorizationAction = createAsyncThunk<
  Nullable<UserInfo>,
  undefined,
  {
    extra: AxiosInstance;
  }
>(
  AuthorizationActions.Check,
  async (_arg, { extra: apiInstance }) => {
    const authorizationToken = tokenServiceInstance.authorizationToken;
    if (authorizationToken.get()) {
      const { data } = await apiInstance.get<UserCheckResult>(ServerEndpoints.Login);
      authorizationToken.set(data.token);
      return {
        email: data.email,
      };
    }
    return null;
  }
);

export const loginAction = createAsyncThunk<
  UserInfo,
  AuthorizationData,
  {
    dispatch: AppDispatch;
    extra: AxiosInstance;
  }
>(
  AuthorizationActions.Login,
  async (authData, { extra: apiInstance }) => {
    tokenServiceInstance.authorizationToken.clear();
    const { data } = await apiInstance.post<UserCheckResult>(ServerEndpoints.Login, authData);
    tokenServiceInstance.authorizationToken.set(data.token);
    return {
      email: data.email
    };
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    extra: AxiosInstance;
  }
>(AuthorizationActions.Logout,
  async (_, { extra: apiInstance, dispatch }) => {
    await apiInstance.delete(ServerEndpoints.Logout);
    tokenServiceInstance.authorizationToken.clear();
    dispatch(redirectToRouteAction({
      route: RoutesEnum.Login,
      replace: true
    }));
  }
);
