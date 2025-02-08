import { JSX } from 'react';
import { RoutesEnum } from '@shared/model';
import { MessageBlock } from '@shared/ui/message-block';
import { Link } from 'react-router-dom';

export function NoBookingsSection(): JSX.Element {
  return (
    <MessageBlock
      message={
        <>
          Вы не забронировали ни одного квеста :&#40;
          <br />
          Выберите что-нибудь.
        </>
      }
    >
      <Link to={RoutesEnum.Main} className='btn btn--accent btn--general login-form__submit'>
        К списку квестов
      </Link>
    </MessageBlock>
  );
}
