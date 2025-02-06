import { QuestTagInfo } from '@entities/quest/model';
import { QuestLevel } from '@entities/quest/model';
import { TagIconId } from '@entities/quest/config';
import { questLevelToDescriptionMap } from '@entities/quest/config/maps';

export const createLevelTagInfo = (level: QuestLevel): QuestTagInfo => ({
  description: questLevelToDescriptionMap.get(level) ?? '',
  iconId: TagIconId.Level
});
