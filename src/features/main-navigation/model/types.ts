import { AuthorizationStatusEnum } from '@entities/user';
import { RoutesEnum } from '@shared/model';

export type NavigationItemConfig = {
  id: string;
  caption: string;
  route: RoutesEnum;
  showOnly?: AuthorizationStatusEnum;
}
