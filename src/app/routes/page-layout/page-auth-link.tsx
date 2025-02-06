import { ReactNode } from 'react';
import { AuthorizationLink } from '@widgets/layout';
import { useLocation } from 'react-router-dom';
import { RoutesEnum } from '@shared/model';

export function PageAuthLink(): ReactNode {
  const location = useLocation();
  const showAuthActionLink = (location.pathname.match(RoutesEnum.Login)?.length ?? 0) === 0;

  return showAuthActionLink && <AuthorizationLink />;
}
