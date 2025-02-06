import { Classed } from '@shared/model';
import classNames from 'classnames';
import { JSX } from 'react';

type PageHeaderProps = Classed<Record<string, never>>;

export function PageHeader({ className }: PageHeaderProps): JSX.Element {
  const headerContainerClassName = classNames('page-content__title-wrapper', className);
  return (
    <div className={headerContainerClassName}>
      <h1 className='subtitle page-content__subtitle'>квесты в Санкт-Петербурге</h1>
      <h2 className='title title--size-m page-content__title'>Выберите тематику</h2>
    </div>
  );
}
