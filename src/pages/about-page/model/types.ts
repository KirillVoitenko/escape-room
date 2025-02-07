import type { MapPoint } from '@shared/model';

export type Address = {
  city: string;
  street: string;
  position: MapPoint;
}

export type CompanyInfo = {
  address: Address;
  workSheduleDescription: string;
  phone: string;
  email: string;
};
