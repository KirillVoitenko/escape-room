import { Classed } from '@shared/model';
import classNames from 'classnames';
import { JSX } from 'react';

type MessageBlockProps = Classed<{
  message: string;
}>

export function MessageBlock({ message, className }: MessageBlockProps): JSX.Element {
  const paragraphClassName = classNames('message-block', className);

  return (
    <p className={paragraphClassName}>
      {message}
    </p>
  );
}
