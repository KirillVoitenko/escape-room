import { JSX } from 'react';
import { Layout } from '@widgets/layout';
import { QuestPreviewImage } from '@shared/ui/quest-preview-image';
import { AdaptiveContainer } from '@shared/ui/adaptive-container';
import { LoginForm } from '@features/login-form';
import { AuthorizationData, AuthorizationStatusEnum, useAuthorization } from '@entities/user';
import { PAGE_TITLE, PREVIEW_ATTRIBUTES } from '@pages/login-page/config';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { RootState, RoutesEnum } from '@shared/model';
import { SearchParamsNames } from '@shared/config';
import { withBrowserTitle } from '@shared/lib/hocs/with-browser-title';
import { useStore } from 'react-redux';


function LoginPage(): JSX.Element {
  const [searchParams] = useSearchParams();
  const store = useStore<RootState>();
  const { login } = useAuthorization();
  const navigate = useNavigate();

  const formSubmitHandler = async (data: AuthorizationData) => {
    const returnUrl = searchParams.get(SearchParamsNames.ReturnUrl);
    await login(data);
    if (store.getState().authorization.status === AuthorizationStatusEnum.Authorized) {
      navigate(returnUrl ?? RoutesEnum.Main, { replace: true });
    }
  };

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
          <LoginForm onSubmit={formSubmitHandler} />
        </div>
      </AdaptiveContainer>
    </Layout.Content>
  );
}

export const LoginPageWithTitle = withBrowserTitle(LoginPage, PAGE_TITLE);
