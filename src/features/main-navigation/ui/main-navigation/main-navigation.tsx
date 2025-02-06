import { JSX } from 'react';
import classNames from 'classnames';
import { NAVIGATION_ITEMS_CONFIG } from '@features/main-navigation/config/navigation-config';
import { AuthorizationStatusEnum } from '@entities/user';
import { Classed } from '@shared/model';
import { NavigationItemConfig } from '@features/main-navigation/model';
import { MainNavigationItem } from '../main-navigation-item';

type MainNavigationProps = Classed<{
  authorizationStatus: AuthorizationStatusEnum;
}>

export function MainNavigation({ authorizationStatus, className }: MainNavigationProps): JSX.Element {
  const navigationClassName = classNames('main-nav header__main-nav', className);
  const itemsConfig: NavigationItemConfig[] = [];
  NAVIGATION_ITEMS_CONFIG.forEach((current) => {
    if (current?.showOnly) {
      if (current.showOnly === authorizationStatus) {
        itemsConfig.push(current);
      }
      return;
    }
    itemsConfig.push(current);
  });

  return (
    <nav className={navigationClassName}>
      <ul className='main-nav__list'>
        {itemsConfig.map((current) => <MainNavigationItem config={current} key={current.id} />)}
      </ul>
    </nav>
  );
}
