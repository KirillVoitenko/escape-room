import { ElementSize, Nullable, QuestLevel, QuestType } from '@shared/model';
import { BaseFilterItemConfig } from '@shared/ui/filter-panel';

export type BaseQuestFilterItemConfig<TValueType> = BaseFilterItemConfig<Nullable<TValueType>>;

export interface GenreFilterItemConfig extends BaseQuestFilterItemConfig<QuestType> {
  iconId: string;
  iconSize: ElementSize;
}

export type LevelFilterItemConfig = BaseQuestFilterItemConfig<QuestLevel>;

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
