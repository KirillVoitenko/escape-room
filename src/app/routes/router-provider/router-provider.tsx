import { AppRoutes } from '../app-routes';
import { JSX } from 'react';
import { history } from '@app/config/history';
import { HistoryRouter } from '@shared/ui/history-router';

export function RouterProvider(): JSX.Element {
  return (
    <HistoryRouter history={history}>
      <AppRoutes />
    </HistoryRouter>
  );
}
