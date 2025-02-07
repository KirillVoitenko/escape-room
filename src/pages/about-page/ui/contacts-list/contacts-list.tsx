import { CompanyInfo } from '@pages/about-page/model';
import { Classed } from '@shared/model';
import classNames from 'classnames';
import { JSX } from 'react';
import { ContactsListItem } from './contacts-list-item';
import { PhoneLink } from '@shared/ui/phone-link';

type ContactsListProps = Classed<{
  info: CompanyInfo;
}>

export function ContactsList({ info, className }: ContactsListProps): JSX.Element {
  const listContainerClassName = classNames('contacts__list', className);

  return (
    <dl className={listContainerClassName}>
      <ContactsListItem title='Адрес'>
        <>
          {info.address.city},<br/>
          {info.address.street}
        </>
      </ContactsListItem>
      <ContactsListItem title='Режим работы'>
        {info.workSheduleDescription}
      </ContactsListItem>
      <ContactsListItem title='Телефон'>
        <PhoneLink className='link' phone={info.phone} />
      </ContactsListItem>
      <ContactsListItem title='E–mail'>
        <a className='link' href={`mailto:${info.email}`}>
          {info.email}
        </a>
      </ContactsListItem>
    </dl>
  );
}
