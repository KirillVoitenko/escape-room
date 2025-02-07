import { AuthorizationData } from '@entities/user';

export interface LoginFormData extends AuthorizationData {
  personalAgreementConfirm: boolean;
}
