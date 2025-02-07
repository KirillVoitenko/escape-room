import { Layout } from '@widgets/layout';
import { JSX } from 'react';
import { COMPANY_INFO, PAGE_TITLE, PREVIEW_ATTRIBUTES } from '@pages/about-page/config';
import { QuestPreviewImage } from '@shared/ui/quest-preview-image';
import { withBrowserTitle } from '@shared/lib/hocs/with-browser-title';
import { ContactsList } from '../contacts-list';
import { LeafletMap } from '@shared/ui/leaflet-map';

function AboutPage(): JSX.Element {
  return (
    <Layout.Content className='page-content decorated-page'>
      <div className='decorated-page__decor' aria-hidden>
        <QuestPreviewImage
          alt={PREVIEW_ATTRIBUTES.alt}
          src={PREVIEW_ATTRIBUTES.src}
          webpSrc={PREVIEW_ATTRIBUTES.webpSrc}
        />
      </div>
      <div className='container'>
        <div className='page-content__title-wrapper page-content__title-wrapper--underlined'>
          <p className='subtitle page-content__subtitle'>
            квесты в&nbsp;Санкт-Петербурге
          </p>
          <h1 className='title title--size-m page-content__title'>
            Контакты
          </h1>
        </div>
        <div className='contacts'>
          <ContactsList info={COMPANY_INFO} />
          <LeafletMap
            center={COMPANY_INFO.address.position}
            className='contacts__map'
            points={[COMPANY_INFO.address.position]}
          />
        </div>
      </div>
    </Layout.Content>
  );
}

export const AboutPageWithTitle = withBrowserTitle(AboutPage, PAGE_TITLE);
