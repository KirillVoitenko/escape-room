import { Classed, ElementSize } from '@shared/model';
import { JSX } from 'react';
import { DEFAULT_TAG_SIZE } from '@entities/quest/config';
import classNames from 'classnames';
import { QuestTagInfo } from '@entities/quest/model';

interface QuestTagProps extends Classed<QuestTagInfo> {
  iconSize?: ElementSize;
}

export function QuestTag({ iconId, description, className, iconSize = DEFAULT_TAG_SIZE }: QuestTagProps): JSX.Element {
  const tagContainerClassName = classNames('tags__item', className);
  return (
    <li className={tagContainerClassName}>
      <svg width={iconSize.width} height={iconSize.height} aria-hidden>
        <use xlinkHref={iconId} />
      </svg>
      {description}
    </li>
  );
}
