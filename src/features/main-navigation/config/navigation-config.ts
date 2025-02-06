import { RoutesEnum } from '@shared/model';
import { NavigationItemConfig } from '../model';
import { AuthorizationStatusEnum } from '@entities/user';

export const NAVIGATION_ITEMS_CONFIG: NavigationItemConfig[] = [
  {
    id: 'quests-list-page-link',
    caption: 'Квесты',
    route: RoutesEnum.Main
  },
  {
    id: 'about-page-link',
    caption: 'Контакты',
    route: RoutesEnum.About
  },
  {
    id: 'user-quests-page-link',
    caption: 'Мои бронирования',
    route: RoutesEnum.UserQuests,
    showOnly: AuthorizationStatusEnum.Authorized
  }
];
