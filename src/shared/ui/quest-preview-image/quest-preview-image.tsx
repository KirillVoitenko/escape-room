import { ElementSize } from '@shared/model';
import { JSX } from 'react';

type QuestPreviewImageProps = {
  src: string;
  webpSrc: string;
  alt: string;
  size?: ElementSize;
}

export function QuestPreviewImage({alt, src, webpSrc, size}: QuestPreviewImageProps): JSX.Element {
  return (
    <picture>
      <source type='image/webp' srcSet={webpSrc} />
      <img src={src} srcSet={webpSrc} alt={alt} {...size}/>
    </picture>
  );
}
