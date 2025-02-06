import { JSX } from 'react';
import { Classed } from '@shared/model';
import classNames from 'classnames';
import type {
  BaseFilterItemConfig,
  OnFilterChangeCallback,
  RenderItemProp
} from './types';

type FilterPanelProps<TFilterValueType, TFilterConfig extends BaseFilterItemConfig<TFilterValueType>> = Classed<{
  items: TFilterConfig[];
  activeFilter: TFilterValueType;
  onFilterChange: OnFilterChangeCallback<TFilterValueType>;
  renderItem: RenderItemProp<TFilterValueType, TFilterConfig>;
}>;

export function FilterPanel<TFilterValueType, TFilterConfig extends BaseFilterItemConfig<TFilterValueType>>({
  items,
  activeFilter,
  renderItem,
  className,
  onFilterChange
}: FilterPanelProps<TFilterValueType, TFilterConfig>): JSX.Element {
  const listClassName = classNames('filter__list', className);

  return (
    <ul className={listClassName}>
      {items.map((current) => renderItem(current, onFilterChange, current.value === activeFilter))}
    </ul>
  );
}
