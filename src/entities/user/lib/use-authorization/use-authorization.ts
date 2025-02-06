import { AuthorizationData, AuthorizationStatusEnum, UserInfo } from '@entities/user/model';
import {
  authorizationStatusSelector,
  authorizedUserSelector,
  checkAuthorizationAction,
  loginAction,
  logoutAction,
} from '@entities/user/model/authorization';
import { useAppDispatch, useAppSelector } from '@shared/lib/redux';
import { Nullable } from '@shared/model';
import { useCallback } from 'react';

type UseAuthorizationReturn = {
  status: AuthorizationStatusEnum;
  user: Nullable<UserInfo>;
  login: (data: AuthorizationData) => Promise<void>;
  logout: () => Promise<void>;
  checkAuthorization: () => Promise<void>;
}

export const useAuthorization = (): UseAuthorizationReturn => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(authorizationStatusSelector);
  const user = useAppSelector(authorizedUserSelector);

  const login = useCallback(
    async (data: AuthorizationData) => {
      await dispatch(loginAction(data));
    },
    [dispatch]
  );

  const logout = useCallback(
    async () => {
      await dispatch(logoutAction());
    },
    [dispatch]
  );

  const checkAuthorization = useCallback(
    async () => {
      await dispatch(checkAuthorizationAction());
    },
    [dispatch]
  );

  return {
    login,
    checkAuthorization,
    logout,
    status,
    user
  };
};
