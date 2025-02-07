import {
  AUTO_CLOSE_TIME,
  TOAST_CONTAINER_ID,
  TOAST_POSITION,
  TOAST_PUSHES_LIMIT,
  TOAST_THEME
} from '@app/config/toast';
import { RouterProvider } from '@app/routes/router-provider';
import { JSX } from 'react';
import { ToastContainer } from 'react-toastify';
import { useStartup } from '@app/startup';
import { GlobalLoader } from '@shared/ui/global-loader';
import { authorizationLoadingSelector } from '@entities/user';
import { mainQuestsLoadingSelector, questExtendedLoadingSelector } from '@entities/quest';

export function Application(): JSX.Element {
  useStartup();
  return (
    <>
      <ToastContainer
        limit={TOAST_PUSHES_LIMIT}
        autoClose={AUTO_CLOSE_TIME}
        theme={TOAST_THEME}
        position={TOAST_POSITION}
        containerId={TOAST_CONTAINER_ID}
      />
      <GlobalLoader
        authorizationLoadingSelector={authorizationLoadingSelector}
        mainQuestsLoadingSelector={mainQuestsLoadingSelector}
        questExtendedLoadingSelector={questExtendedLoadingSelector}
      />
      <RouterProvider />
    </>
  );
}
