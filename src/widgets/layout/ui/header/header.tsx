import { Classed } from '@shared/model';
import { AdaptiveContainer } from '@shared/ui/adaptive-container';
import classNames from 'classnames';
import { JSX, PropsWithChildren, ReactNode } from 'react';
import { Logo } from '../logo';
import { PhoneLink } from '@shared/ui/phone-link';

type HeaderProps = Classed<PropsWithChildren<{
  authLink?: ReactNode;
}>>

export function Header({ className, authLink, children }: HeaderProps): JSX.Element {
  const headerClassName = classNames(
    'header',
    {
      [String(className)]: !!className
    }
  );
  return (
    <header className={headerClassName}>
      <AdaptiveContainer>
        <Logo />
        {children}
        <div className='header__side-nav'>
          {authLink}
          <PhoneLink className='link header__side-item header__phone-link' phone='88003335599' />
        </div>
      </AdaptiveContainer>
    </header>
  );
}
