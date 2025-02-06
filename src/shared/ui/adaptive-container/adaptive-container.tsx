import { ClassedAndStyled } from '@shared/model';
import classNames from 'classnames';
import { JSX, PropsWithChildren } from 'react';
import { useMatchMedia } from '@shared/lib/hooks/use-match-media';

type AdaptiveContainerProps = ClassedAndStyled<PropsWithChildren>;

const MATCH_MEDIA_CONFIG = {
  isLarge: '(min-width: 1366px)',
  isSmall: 'not (min-width: 1366px)'
};

export function AdaptiveContainer({ children, className, style }: AdaptiveContainerProps): JSX.Element {
  const { isLarge, isSmall } = useMatchMedia(MATCH_MEDIA_CONFIG);

  const containerClassName = classNames(
    'container',
    {
      'container--size-l': isLarge,
      'container--size-s': isSmall,
    },
    className,
  );

  return (
    <div className={containerClassName} style={style}>
      {children}
    </div>
  );
}
