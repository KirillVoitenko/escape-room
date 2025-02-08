import { RootState } from '@shared/model';
import { globalLoaderSelector } from '@shared/model';
import { Spinner } from '@shared/ui/spinner';
import classNames from 'classnames';
import { JSX } from 'react';
import { useAppSelector } from '@shared/lib/redux';

type Selector = (state: RootState) => boolean;

type GlobalLoaderProps = {
  className?: string;
  authorizationLoadingSelector: Selector;
  mainQuestsLoadingSelector: Selector;
  questExtendedLoadingSelector: Selector;
  bookingListLoadingSelector: Selector;
}

export function GlobalLoader({
  className,
  authorizationLoadingSelector,
  mainQuestsLoadingSelector,
  questExtendedLoadingSelector,
  bookingListLoadingSelector,
}: GlobalLoaderProps): JSX.Element {
  const innerLoading = useAppSelector(globalLoaderSelector);
  const authLoading = useAppSelector(authorizationLoadingSelector);
  const mainLoading = useAppSelector(mainQuestsLoadingSelector);
  const questExtendedLoading = useAppSelector(questExtendedLoadingSelector);
  const bookingLoading = useAppSelector(bookingListLoadingSelector);

  const loading = innerLoading || authLoading || mainLoading || questExtendedLoading || bookingLoading;

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
