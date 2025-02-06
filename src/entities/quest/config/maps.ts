import {
  QuestLevel,
  QuestLevelCaption,
  QuestType,
  QuestTypeCaption,
} from '../model';

export const questLevelToDescriptionMap = new Map<QuestLevel, QuestLevelCaption>([
  [QuestLevel.Easy, QuestLevelCaption.Easy],
  [QuestLevel.Medium, QuestLevelCaption.Medium],
  [QuestLevel.Hard, QuestLevelCaption.Hard],
]);

export const questTypeToDescriptionMap = new Map<QuestType, QuestTypeCaption>([
  [QuestType.Adventures, QuestTypeCaption.Adventures],
  [QuestType.Detective, QuestTypeCaption.Detective],
  [QuestType.Horror, QuestTypeCaption.Horror],
  [QuestType.Mystic, QuestTypeCaption.Mystic],
  [QuestType.SciFi, QuestTypeCaption.SciFi]
]);
