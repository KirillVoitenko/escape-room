import { JSX } from 'react';
import { Classed } from '@shared/model';
import classNames from 'classnames';
import type {
  BaseFilterItemConfig,
  RenderItemProp
} from './types';

type FilterPanelProps<TFilterValueType, TFilterConfig extends BaseFilterItemConfig<TFilterValueType>> = Classed<{
  items: TFilterConfig[];
  activeFilter: TFilterValueType;
  renderItem: RenderItemProp<TFilterValueType, TFilterConfig>;
}>;

export function FilterPanel<TFilterValueType, TFilterConfig extends BaseFilterItemConfig<TFilterValueType>>({
  items,
  activeFilter,
  renderItem,
  className,
}: FilterPanelProps<TFilterValueType, TFilterConfig>): JSX.Element {
  const listClassName = classNames('filter__list', className);

  return (
    <ul className={listClassName}>
      {items.map((current) => renderItem(current, current.value === activeFilter))}
    </ul>
  );
}
