import { Classed } from '@shared/model';
import { JSX } from 'react';

type PhoneLinkProps = Classed<{
  phone: string;
}>;

const PHONE_PATTERN = /^((\+7)|(8))\d{10}/;

export function PhoneLink({ phone, className }: PhoneLinkProps): JSX.Element {
  const isCorrectPhone = PHONE_PATTERN.test(phone);
  const adaptedPhone = phone.replace(/[^0-9]/g, '');

  if (!isCorrectPhone) {
    throw new Error(`Invalid phone value ${phone}`);
  }
  const formattedPhone = adaptedPhone.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/g, '8 ($2) $3 $4 $5');
  return (
    <a className={className} href={`tel:${phone}`}>
      {formattedPhone}
    </a>
  );
}
