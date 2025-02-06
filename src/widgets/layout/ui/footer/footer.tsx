import { JSX, PropsWithChildren } from 'react';
import { ALL_SOCIALS } from '@widgets/layout/config';
import { Classed } from '@shared/model';
import classNames from 'classnames';
import { AdaptiveContainer } from '@shared/ui/adaptive-container';
import { SocialsList } from '../socials-list';

type FooterProps = Classed<PropsWithChildren>;

export function Footer({ children, className }: FooterProps): JSX.Element {
  const footerClassName = classNames('footer', className);
  return (
    <footer className={footerClassName}>
      <AdaptiveContainer>
        <SocialsList socials={ALL_SOCIALS} />
        {children}
      </AdaptiveContainer>
    </footer>
  );
}
