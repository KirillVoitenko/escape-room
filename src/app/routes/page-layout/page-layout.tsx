import { AuthorizationStatusEnum } from '@entities/user';
import { MainNavigation } from '@features/main-navigation';
import { RoutesEnum } from '@shared/model';
import { Layout } from '@widgets/layout';
import { JSX, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

type PageLayoutProps = PropsWithChildren<{
  authorizationStatus: AuthorizationStatusEnum;
}>;

export function PageLayout({ children, authorizationStatus }: PageLayoutProps): JSX.Element {
  const location = useLocation();
  const showAuthActionLink = (location.pathname.match(RoutesEnum.Login)?.length ?? 0) === 0;

  return (
    <Layout>
      <Layout.Header showAuthLink={showAuthActionLink}>
        <MainNavigation authorizationStatus={authorizationStatus} />
      </Layout.Header>
      <Outlet />
      {children}
      <Layout.Footer />
    </Layout>
  );
}
