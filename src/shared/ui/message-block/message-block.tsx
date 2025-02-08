import { Classed } from '@shared/model';
import classNames from 'classnames';
import { JSX, PropsWithChildren, ReactNode } from 'react';

type MessageBlockProps = Classed<PropsWithChildren<{
  message: ReactNode;
}>>

export function MessageBlock({ message, className, children }: MessageBlockProps): JSX.Element {
  const paragraphClassName = classNames('message-block__paragraph', className);

  return (
    <div className='message-block__container'>
      <p className={paragraphClassName}>
        {message}
      </p>
      {children}
    </div>
  );
}
