import { AuthorizationStatusEnum } from '@entities/user';
import { MainNavigation } from '@features/main-navigation';
import { Layout } from '@widgets/layout';
import { JSX, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { PageAuthLink } from './page-auth-link';

type PageLayoutProps = PropsWithChildren<{
  authorizationStatus: AuthorizationStatusEnum;
}>;

export function PageLayout({ children, authorizationStatus }: PageLayoutProps): JSX.Element {
  return (
    <Layout>
      <Layout.Header authLink={<PageAuthLink />}>
        <MainNavigation authorizationStatus={authorizationStatus} />
      </Layout.Header>
      <Outlet />
      {children}
      <Layout.Footer />
    </Layout>
  );
}
