import { PAGE_TITLE } from '@pages/quest-details-page/config';
import { withBrowserTitle } from '@shared/lib/hocs/with-browser-title';
import { Layout } from '@widgets/layout';
import { JSX } from 'react';
import { useParams } from 'react-router-dom';

type PageUrlParams = {
  id: string;
}

function QuestDetailsPage(): JSX.Element {
  const { id } = useParams<PageUrlParams>();
  return (
    <Layout.Content>
      {id}
    </Layout.Content>
  );
}

export const QuestPageWithTitle = withBrowserTitle(QuestDetailsPage, PAGE_TITLE);
