import { RootState } from '@shared/model';

type PickedQuestExtendedState = Pick<RootState, 'questExtended'>;

export const questExtendedLoadingSelector = (state: PickedQuestExtendedState) => state.questExtended.loading;
export const questExtendedDataSelector = (state: PickedQuestExtendedState) => state.questExtended.quest;
