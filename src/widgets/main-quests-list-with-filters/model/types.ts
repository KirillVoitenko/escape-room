import { QuestLevel, QuestType } from '@entities/quest';
import { ElementSize, Nullable } from '@shared/model';
import { BaseFilterItemConfig } from '@shared/ui/filter-panel';

export interface GenreFilterItemConfig extends BaseFilterItemConfig<Nullable<QuestType>> {
  iconId: string;
  iconSize: ElementSize;
}

export type LevelFilterItemConfig = BaseFilterItemConfig<Nullable<QuestLevel>>;

export enum GenreFilterItemsId {
  All = 'all',
  Adventures = 'adventure',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sciFi'
}

export enum LevelFilterItemsId {
  Any = 'any',
  Easy = 'easy',
  Middle = 'middle',
  Hard = 'hard'
}
