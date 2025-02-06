import { useAuthorization } from '@entities/user';
import { useEffect } from 'react';

export const useStartup = () => {
  const { checkAuthorization } = useAuthorization();

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
};
