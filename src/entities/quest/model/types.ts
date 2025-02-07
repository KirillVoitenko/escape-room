import { BaseFetchedState, QuestLevel, QuestType } from '@shared/model';

export enum QuestTypeCaption {
  All = 'Все квесты',
  Adventures = 'Приключения',
  Detective = 'Детектив',
  Horror = 'Ужасы',
  Mystic = 'Мистика',
  SciFi = 'Sci-fi'
}

export enum QuestLevelCaption {
  All = 'Любой',
  Easy = 'Лёгкий',
  Medium = 'Средний',
  Hard = 'Сложный'
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
