import { Classed } from '@shared/model';
import { Spinner } from '@shared/ui/spinner';
import classNames from 'classnames';
import { JSX } from 'react';

type FallbackProps = Classed<Record<string, never>>;

export function Fallback({ className }: FallbackProps): JSX.Element {

  const loaderClassName = classNames(
    'page-fallback',
    className
  );
  return (
    <div className={loaderClassName}>
      <Spinner isActive />
    </div>
  );
}
