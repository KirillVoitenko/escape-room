import { Classed } from '@shared/model';
import { OnFilterChangeCallback } from '@shared/ui/filter-panel';
import { BaseQuestFilterItemConfig } from '@widgets/main-quests-list-with-filters/model';
import classNames from 'classnames';
import { ChangeEventHandler, JSX, ReactNode } from 'react';
import { Nullable } from '@shared/model';

type FilterItemProps<TValueType, TItemConfig extends BaseQuestFilterItemConfig<TValueType>> = Classed<{
  config: TItemConfig;
  onFilterChange: OnFilterChangeCallback<Nullable<TValueType>>;
  isActive: boolean;
  icon?: ReactNode;
}>

export function FilterItem<TValueType, TItemConfig extends BaseQuestFilterItemConfig<TValueType>>({
  config,
  isActive,
  onFilterChange,
  className,
  icon
}: FilterItemProps<TValueType, TItemConfig>): JSX.Element {
  const listItemClassName = classNames('filter__item', className);

  const filterChangeHandler: ChangeEventHandler<HTMLInputElement> = () => {
    onFilterChange(config.value);
  };

  return (
    <li className={listItemClassName}>
      <input id={config.id} type='radio' name={config.name} onChange={filterChangeHandler} checked={isActive} />
      <label className='filter__label' htmlFor={config.id}>
        {icon}
        <span className='filter__label-text'>
          {config.caption}
        </span>
      </label>
    </li>
  );
}
