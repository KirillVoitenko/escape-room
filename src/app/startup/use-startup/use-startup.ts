import { AuthorizationStatusEnum, useAuthorization } from '@entities/user';
import { useEffect } from 'react';
import { useAppDispatch } from '@shared/lib/redux';
import { fetchMainQuestsListAction } from '@entities/quest';
import { fetchBookingQuestsListAction } from '@features/booking-list';

export const useStartup = () => {
  const { checkAuthorization, status } = useAuthorization();
  const dispatch = useAppDispatch();

  useEffect(
    () => {
      let componentIsRendered = false;

      const runAuthorizationCheck = async () => {
        if (!componentIsRendered) {
          await checkAuthorization();
        }
      };

      runAuthorizationCheck();

      return () => {
        componentIsRendered = true;
      };
    },
    [checkAuthorization]
  );

  useEffect(
    () => {
      let componentIsRendered = false;

      const runListsFetch = async () => {
        if (!componentIsRendered) {
          await Promise.all([
            status !== AuthorizationStatusEnum.Unknown ? dispatch(fetchMainQuestsListAction()) : Promise.resolve(),
            status === AuthorizationStatusEnum.Authorized ? dispatch(fetchBookingQuestsListAction()) : Promise.resolve()
          ]);
        }
      };

      runListsFetch();

      return () => {
        componentIsRendered = true;
      };
    },
    [dispatch, status]
  );
};
