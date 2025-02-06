import { JSX, MouseEventHandler } from 'react';
import { AuthorizationStatusEnum, useAuthorization } from '@entities/user';
import { Link } from 'react-router-dom';
import { RoutesEnum } from '@shared/model';

export function AuthorizationLink(): JSX.Element {
  const { logout, status } = useAuthorization();

  const signOutHandler: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    logout();
  };

  return status === AuthorizationStatusEnum.Authorized
    ? <a className='btn btn--accent header__side-item' onClick={signOutHandler}>Выйти</a>
    : <Link className='btn header__side-item header__login-btn' to={RoutesEnum.Login}>Вход</Link>;
}
