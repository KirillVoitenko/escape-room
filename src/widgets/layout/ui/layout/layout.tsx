import type { PropsWithChildren, FC } from 'react';
import type { Classed } from '@shared/model';
import classNames from 'classnames';
import { Header } from '../header';
import { Content } from '../content';
import { Footer } from '../footer';

type LayoutProps = Classed<PropsWithChildren>;

type LayoutExtensions = {
  Header: typeof Header;
  Content: typeof Content;
  Footer: typeof Footer;
}

export const Layout: FC<LayoutProps> & LayoutExtensions = ({ className, children }: LayoutProps) => {
  const layoutClassName = classNames('wrapper', {
    [(className ?? '')]: !!className
  });

  return (
    <div className={layoutClassName}>
      {children}
    </div>
  );
};

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
