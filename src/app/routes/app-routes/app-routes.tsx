import { Routes, Route } from 'react-router-dom';
import { JSX, lazy, Suspense } from 'react';
import { RoutesEnum } from '@shared/model';
import { PageLayout } from '../page-layout';
import { AuthorizationStatusEnum, useAuthorization } from '@entities/user';
import { PrivateRoute } from '../private-route';
import { Fallback } from '../fallback';

const LoginPage = lazy(() => import('@pages/login-page'));
const NotFoundPage = lazy(() => import('@pages/not-found-page'));
const MainPage = lazy(() => import('@pages/main-page'));
const QuestDetailsPage = lazy(() => import('@pages/quest-details-page'));
const AboutPage = lazy(() => import('@pages/about-page'));
const QuestBookingPage = lazy(() => import('@pages/quest-booking-page'));

export function AppRoutes(): JSX.Element {
  const { status } = useAuthorization();
  return (
    <Routes>
      <Route
        element={<PageLayout authorizationStatus={status} />}
        path={RoutesEnum.Main}
      >
        <Route
          index
          element={
            <Suspense fallback={<Fallback />}>
              <MainPage />
            </Suspense>
          }
        />
        <Route
          path={RoutesEnum.Login}
          element={
            <PrivateRoute
              isPrivate={status !== AuthorizationStatusEnum.Authorized}
              redirectPath={RoutesEnum.Main}
            >
              <Suspense fallback={<Fallback />}>
                <LoginPage />
              </Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path={RoutesEnum.About}
          element={
            <Suspense fallback={<Fallback />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path={RoutesEnum.Quest}
          element={
            <Suspense fallback={<Fallback />}>
              <QuestDetailsPage />
            </Suspense>
          }
        />
        <Route
          path={RoutesEnum.Booking}
          element={
            <PrivateRoute
              isPrivate={status === AuthorizationStatusEnum.Authorized}
              redirectPath={RoutesEnum.Login}
            >
              <Suspense fallback={<Fallback />}>
                <QuestBookingPage />
              </Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path={RoutesEnum.UserQuests}
          element={
            <PrivateRoute
              isPrivate={status === AuthorizationStatusEnum.Authorized}
              redirectPath={RoutesEnum.Login}
            >
              <p>User booked quests page</p>
            </PrivateRoute>
          }
        />
        <Route
          path={RoutesEnum.All}
          element={
            <Suspense>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
