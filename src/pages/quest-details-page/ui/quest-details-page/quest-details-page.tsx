import { useQuestQuery, type QuestExtended } from '@entities/quest';
import { PAGE_TITLE } from '@pages/quest-details-page/config';
import { getApiInstance } from '@shared/lib/api-instance';
import { withBrowserTitle } from '@shared/lib/hocs/with-browser-title';
import { ServerEndpoints } from '@shared/model';
import { Layout } from '@widgets/layout';
import { JSX, useCallback } from 'react';
import { generatePath, useParams } from 'react-router-dom';
import { QuestInfo } from '../quest-info';

type PageUrlParams = {
  id: string;
}

function QuestDetailsPage(): JSX.Element {
  const { id } = useParams<PageUrlParams>();

  const fetchQuestInfo = useCallback(
    async (): Promise<QuestExtended> => {
      if (id) {
        const questInfoUrl = generatePath(ServerEndpoints.QuestExtended, { questId: id });
        const result = await getApiInstance().get<QuestExtended>(questInfoUrl);
        return result.data;
      }

      throw new Error('No find \'id\' parameter in URL');
    },
    [id]
  );

  const { data } = useQuestQuery(fetchQuestInfo);

  return (
    <Layout.Content className='decorated-page quest-page'>
      {data && <QuestInfo quest={data} />}
    </Layout.Content>
  );
}

export const QuestPageWithTitle = withBrowserTitle(QuestDetailsPage, PAGE_TITLE);
