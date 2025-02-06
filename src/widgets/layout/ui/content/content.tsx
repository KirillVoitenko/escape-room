import { Classed } from '@shared/model';
import { JSX, PropsWithChildren } from 'react';

type ContentProps = Classed<PropsWithChildren>;

export function Content({ children, className }: ContentProps): JSX.Element {
  return (
    <main className={className}>
      {children}
    </main>
  );
}
