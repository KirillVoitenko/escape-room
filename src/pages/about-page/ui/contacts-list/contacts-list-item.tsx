import { Classed } from '@shared/model';
import classNames from 'classnames';
import { PropsWithChildren, JSX } from 'react';

type ContactsListItemProps = Classed<PropsWithChildren<{
  title: string;
}>>;

export function ContactsListItem({ title, children, className }: ContactsListItemProps): JSX.Element {
  const itemClassName = classNames('contacts__item', className);

  return (
    <div className={itemClassName}>
      <dt className='contacts__dt'>
        {title}
      </dt>
      <dd className='contacts__dd'>
        {children}
      </dd>
    </div>
  );
}
