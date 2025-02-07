import { Nullable } from '@shared/model';

export type BookingFormValue = {
  date: string;
  personName: string;
  personPhone: string;
  gamersCount: Nullable<number>;
  hasChildren: boolean;
  personalAgreementConfirm: boolean;
};
