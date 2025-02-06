import { RootState } from '@shared/model';

type AuthorizationState = Pick<RootState, 'authorization'>

export const authorizationStatusSelector = (state: AuthorizationState) => state.authorization.status;
export const authorizedUserSelector = (state: AuthorizationState) => state.authorization.user;
export const authorizationLoadingSelector = (state: AuthorizationState) => state.authorization.loading;
