import { JSX } from 'react';

export type OnFilterChangeCallback<TFilterValueType> = (value: TFilterValueType) => void;

export interface BaseFilterItemConfig<TFilterValueType> {
  id: string;
  value: TFilterValueType;
  name: string;
  caption: string;
}

export type RenderItemProp<TFilterValueType, TFilterConfig extends BaseFilterItemConfig<TFilterValueType>> = (
  config: TFilterConfig,
  onFilterChange: (value: TFilterValueType) => void,
  isActive: boolean
) => JSX.Element;

