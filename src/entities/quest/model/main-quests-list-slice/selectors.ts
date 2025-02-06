import type { RootState } from '@shared/model';

type MainQuestsStatePart = Pick<RootState, 'mainQuests'>;

export const mainQuestsListSelector = (state: MainQuestsStatePart) => state.mainQuests.quests;
export const mainQuestsLoadingSelector = (state: MainQuestsStatePart) => state.mainQuests.loading;
