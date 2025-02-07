import { fetchQuestExtendedAction, questExtendedDataSelector } from '@entities/quest';
import { PAGE_TITLE } from '@pages/quest-details-page/config';
import { withBrowserTitle } from '@shared/lib/hocs/with-browser-title';
import { Layout } from '@widgets/layout';
import { JSX, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { QuestInfo } from '../quest-info';
import { useAppDispatch, useAppSelector } from '@shared/lib/redux';

type PageUrlParams = {
  id: string;
}

function QuestDetailsPage(): JSX.Element {
  const { id } = useParams<PageUrlParams>();
  const dispatch = useAppDispatch();
  const quest = useAppSelector(questExtendedDataSelector);

  useEffect(
    () => {
      let componentIsRendered = false;

      const runFetchQuestInfo = async () => {
        if (id && quest?.id !== id && !componentIsRendered) {
          await dispatch(fetchQuestExtendedAction(id));
        }
      };

      runFetchQuestInfo();

      return () => {
        componentIsRendered = true;
      };
    },
    [dispatch, id, quest?.id]
  );

  return (
    <Layout.Content className='decorated-page quest-page'>
      {quest && <QuestInfo quest={quest} />}
    </Layout.Content>
  );
}

export const QuestPageWithTitle = withBrowserTitle(QuestDetailsPage, PAGE_TITLE);
