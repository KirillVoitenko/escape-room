import { withBrowserTitle } from '@shared/lib/hocs/with-browser-title';
import { Layout } from '@widgets/layout';
import { JSX } from 'react';
import { PAGE_TITLE } from '@pages/main-page/config';
import { PageHeader } from '../page-header';
import { MainQuestsListWithFilters } from '@widgets/main-quests-list-with-filters';

function MainPage(): JSX.Element {
  return (
    <Layout.Content className='page-content'>
      <div className='container'>
        <PageHeader />
        <MainQuestsListWithFilters />
      </div>
    </Layout.Content>
  );
}

export const MainPageWithTitle = withBrowserTitle(MainPage, PAGE_TITLE);
