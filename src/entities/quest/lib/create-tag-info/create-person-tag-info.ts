import { QuestTagInfo } from '@entities/quest/model';
import { TagIconId } from '@entities/quest/config';

export const createPersonTagInfo = (peopleInfo: [number, number]): QuestTagInfo => {
  const maxPeoples = Math.max(...peopleInfo);
  const minPeoples = Math.min(...peopleInfo);

  return {
    iconId: TagIconId.Person,
    description: `${minPeoples}–${maxPeoples} чел`
  };
};
