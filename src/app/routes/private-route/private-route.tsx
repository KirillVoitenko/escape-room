import { Navigate } from 'react-router-dom';
import { JSX } from 'react';

type PrivateRouteProps = {
  isPrivate: boolean;
  redirectPath: string;
  children: JSX.Element;
};

export function PrivateRoute({ isPrivate, redirectPath, children }: PrivateRouteProps): JSX.Element {
  return isPrivate ? children : <Navigate to={redirectPath} />;
}
