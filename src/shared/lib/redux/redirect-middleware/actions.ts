import { createAction } from '@reduxjs/toolkit';

export type RedirectActionPayload = {
  route: string;
  replace?: boolean;
}

enum RoutingMiddlewareActions {
  Redirect = 'routing/redirectToRoute'
}

export const redirectToRouteAction = createAction<RedirectActionPayload>(RoutingMiddlewareActions.Redirect);
