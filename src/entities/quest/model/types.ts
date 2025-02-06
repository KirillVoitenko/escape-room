import { BaseFetchedState } from '@shared/model';

export enum QuestLevel {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

export enum QuestType {
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi'
}

export enum QuestTypeCaption {
  All = 'Все квесты',
  Adventures = 'Приключения',
  Detective = 'Детектив',
  Horror = 'Ужасы',
  Mystic = 'Мистика',
  SciFi = 'Sci-fi'
}

export enum QuestLevelCaption {
  All = 'любой',
  Easy = 'лёгкий',
  Medium = 'средний',
  Hard = 'сложный'
}

export interface Quest {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: QuestLevel;
  type: QuestType;
  peopleMinMax: [number, number];
}

export interface QuestExtended extends Quest {
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export interface QuestTagInfo {
  iconId: string;
  description: string;
}

export interface BaseQuestsListState<TQuestItemType> extends BaseFetchedState {
  quests: TQuestItemType[];
}
