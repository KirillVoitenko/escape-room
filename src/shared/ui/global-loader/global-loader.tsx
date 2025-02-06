import { RootState } from '@shared/model';
import { globalLoaderSelector } from '@shared/model';
import { Spinner } from '@shared/ui/spinner';
import classNames from 'classnames';
import { ReactNode } from 'react';
import { useAppSelector } from '@shared/lib/redux';

type Selector = (state: RootState) => boolean;

type GlobalLoaderProps = {
  className?: string;
  authorizationLoadingSelector: Selector;
  mainQuestsLoadingSelector: Selector;
}

export function GlobalLoader({
  className,
  authorizationLoadingSelector,
  mainQuestsLoadingSelector,
}: GlobalLoaderProps): ReactNode {
  const innerLoading = useAppSelector(globalLoaderSelector);
  const authLoading = useAppSelector(authorizationLoadingSelector);
  const mainLoading = useAppSelector(mainQuestsLoadingSelector);
  /*const favoritesLoading = useAppSelector(favoritesOffersLoadingSelector);
  const mainLoading = useAppSelector(mainOffersLoadingSelector);
  const offerPageLoading = useAppSelector(offerPageLoadingSelector);*/

  const loading = innerLoading || authLoading || mainLoading;

  const loaderClassName = classNames(
    'loader-container',
    {
      'loader-container--active': loading,
    },
    className
  );
  return (
    <div className={loaderClassName}>
      <Spinner isActive={loading} />
    </div>
  );
}
