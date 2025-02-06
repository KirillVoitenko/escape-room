import { NavigationItemConfig } from '@features/main-navigation/model';
import { JSX } from 'react';
import { NavLink } from 'react-router-dom';

type MainNavigationItemProps = {
  config: NavigationItemConfig;
};

export function MainNavigationItem({ config }: MainNavigationItemProps): JSX.Element {
  return (
    <li className='main-nav__item'>
      <NavLink
        className='link'
        to={config.route}
      >
        {config.caption}
      </NavLink>
    </li>
  );
}
