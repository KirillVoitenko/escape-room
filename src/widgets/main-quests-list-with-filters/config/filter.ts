import { QuestType, QuestLevel, QuestLevelCaption, QuestTypeCaption } from '@entities/quest';
import type {
  GenreFilterItemConfig,
  LevelFilterItemConfig
} from '../model';
import { GenreFilterItemsId, LevelFilterItemsId } from '../model';

enum InputNames {
  Type = 'type',
  Level = 'level',
}

export const LEVEL_FILTER_ITEMS_CONFIG: LevelFilterItemConfig[] = [
  {
    id: LevelFilterItemsId.Any,
    caption: QuestLevelCaption.All,
    name: InputNames.Level,
    value: null
  },
  {
    id: LevelFilterItemsId.Easy,
    caption: QuestLevelCaption.Easy,
    name: InputNames.Level,
    value: QuestLevel.Easy
  },
  {
    id: LevelFilterItemsId.Middle,
    caption: QuestLevelCaption.Medium,
    name: InputNames.Level,
    value: QuestLevel.Medium
  },
  {
    id: LevelFilterItemsId.Hard,
    caption: QuestLevelCaption.Hard,
    name: InputNames.Level,
    value: QuestLevel.Hard
  }
];

export const GENRE_FILTER_ITEMS_CONFIG: GenreFilterItemConfig[] = [
  {
    id: GenreFilterItemsId.All,
    caption: QuestTypeCaption.All,
    iconId: '#icon-all-quests',
    name: InputNames.Type,
    value: null,
    iconSize: {
      width: 26,
      height: 30
    }
  },
  {
    id: GenreFilterItemsId.Adventures,
    caption: QuestTypeCaption.Adventures,
    iconId: '#icon-adventure',
    name: InputNames.Type,
    value: QuestType.Adventures,
    iconSize: {
      width: 36,
      height: 30
    }
  },
  {
    id: GenreFilterItemsId.Horror,
    caption: QuestTypeCaption.Horror,
    iconId: '#icon-horror',
    name: InputNames.Type,
    value: QuestType.Horror,
    iconSize: {
      width: 30,
      height: 30
    }
  },
  {
    id: GenreFilterItemsId.Mystic,
    caption: QuestTypeCaption.Mystic,
    iconId: '#icon-mystic',
    name: InputNames.Type,
    value: QuestType.Mystic,
    iconSize: {
      width: 30,
      height: 30
    }
  },
  {
    id: GenreFilterItemsId.Detective,
    caption: QuestTypeCaption.Detective,
    iconId: '#icon-detective',
    name: InputNames.Type,
    value: QuestType.Detective,
    iconSize: {
      width: 40,
      height: 30
    }
  },
  {
    id: GenreFilterItemsId.SciFi,
    caption: QuestTypeCaption.SciFi,
    iconId: '#icon-sci-fi',
    name: InputNames.Type,
    value: QuestType.SciFi,
    iconSize: {
      width: 28,
      height: 30
    }
  }
];

