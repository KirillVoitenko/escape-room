import { QuestPreviewImage } from '@shared/ui/quest-preview-image';
import { Layout } from '@widgets/layout';
import { JSX } from 'react';
import { PREVIEW_ATTRIBUTES } from '@pages/not-found-page/config';
import { AdaptiveContainer } from '@shared/ui/adaptive-container';
import { Link, useLocation } from 'react-router-dom';
import { RoutesEnum } from '@shared/model';

export function NotFoundPage(): JSX.Element {
  const location = useLocation();

  const hasNotDefinedRoute = !!location.pathname.match(RoutesEnum.Error);

  return (
    <Layout.Content className='decorated-page'>
      <div className='decorated-page__decor'>
        <QuestPreviewImage
          alt={PREVIEW_ATTRIBUTES.alt}
          src={PREVIEW_ATTRIBUTES.src}
          webpSrc={PREVIEW_ATTRIBUTES.webpSrc}
        />
      </div>
      <AdaptiveContainer style={{textAlign: 'center'}}>
        <h1 style={{marginTop: 300}}>
          {
            hasNotDefinedRoute
              ? <>Произошла непредвиденная ошибка, попробуйте повторить операцию позже</>
              : <>Упс! Запрашиваемый адрес не обнаружен! <sup>(404)</sup></>
          }
        </h1>
        <Link to={RoutesEnum.Main} className='btn btn--accent btn--general login-form__submit'>
          Вернуться на главную
        </Link>
      </AdaptiveContainer>
    </Layout.Content>
  );
}
