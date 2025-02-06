import { JSX } from 'react';
import { Layout } from '@widgets/layout';
import { QuestPreviewImage } from '@shared/ui/quest-preview-image';
import { AdaptiveContainer } from '@shared/ui/adaptive-container';
import { LoginForm } from '@features/login-form';
import { useAuthorization } from '@entities/user';
import { PREVIEW_ATTRIBUTES } from '@pages/login-page/config';

export function LoginPage(): JSX.Element {
  const { login } = useAuthorization();

  return (
    <Layout.Content className='decorated-page login'>
      <div className='decorated-page__decor' aria-hidden>
        <QuestPreviewImage
          alt={PREVIEW_ATTRIBUTES.alt}
          src={PREVIEW_ATTRIBUTES.src}
          webpSrc={PREVIEW_ATTRIBUTES.webpSrc}
        />
      </div>
      <AdaptiveContainer>
        <div className='login__form'>
          <LoginForm onSubmit={login} />
        </div>
      </AdaptiveContainer>
    </Layout.Content>
  );
}
