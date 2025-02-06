export type AuthorizationData = {
  email: string;
  password: string;
}

export enum AuthorizationStatusEnum {
  Authorized = 'AUTHORIZED',
  NoAuthorized = 'NO_AUTHORIZED',
  Unknown = 'UNKNOWN'
}

export interface UserInfo {
  email: string;
}

export interface UserCheckResult extends UserInfo {
  token: string;
}
