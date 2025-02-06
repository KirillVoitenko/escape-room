import { QuestType } from '@entities/quest';
import { Classed } from '@shared/model';
import { OnFilterChangeCallback } from '@shared/ui/filter-panel';
import { GenreFilterItemConfig } from '@widgets/main-quests-list-with-filters/model';
import classNames from 'classnames';
import { ChangeEventHandler, JSX } from 'react';
import { Nullable } from '@shared/model';

type GenreFilterItemProps = Classed<{
  config: GenreFilterItemConfig;
  onFilterChange: OnFilterChangeCallback<Nullable<QuestType>>;
  isActive: boolean;
}>

export function GenreFilterItem({ config, isActive, onFilterChange, className }: GenreFilterItemProps): JSX.Element {
  const listItemClassName = classNames('filter__item', className);

  const filterChangeHandler: ChangeEventHandler<HTMLInputElement> = () => {
    onFilterChange(config.value);
  };

  return (
    <li className={listItemClassName}>
      <input id={config.id} type='radio' name={config.name} onChange={filterChangeHandler} checked={isActive} />
      <label className='filter__label' htmlFor={config.id}>
        <svg className='filter__icon' width={config.iconSize.width} height={config.iconSize.height}>
          <use xlinkHref={config.iconId} />
        </svg>
        <span className='filter__label-text'>
          {config.caption}
        </span>
      </label>
    </li>
  );
}
