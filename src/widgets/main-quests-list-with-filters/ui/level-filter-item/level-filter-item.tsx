import { QuestLevel } from '@entities/quest';
import { Classed, Nullable } from '@shared/model';
import { OnFilterChangeCallback } from '@shared/ui/filter-panel';
import { LevelFilterItemConfig } from '@widgets/main-quests-list-with-filters/model';
import classNames from 'classnames';
import { ChangeEventHandler, JSX } from 'react';

type LevelFilterItemProps = Classed<{
  config: LevelFilterItemConfig;
  onFilterChange: OnFilterChangeCallback<Nullable<QuestLevel>>;
  isActive: boolean;
}>

export function LevelFilterItem({ config, isActive, onFilterChange, className }: LevelFilterItemProps): JSX.Element {
  const listItemClassName = classNames('filter__item', className);

  const filterChangeHandler: ChangeEventHandler<HTMLInputElement> = () => {
    onFilterChange(config.value);
  };

  return (
    <li className={listItemClassName}>
      <input type='radio' name={config.name} id={config.id} checked={isActive} onChange={filterChangeHandler} />
      <label className='filter__label' htmlFor={config.id}>
        <span className='filter__label-text'>{config.caption}</span>
      </label>
    </li>
  );
}
