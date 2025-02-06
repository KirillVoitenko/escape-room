import { JSX } from 'react';

type QuestPreviewImageProps = {
  src: string;
  webpSrc: string;
  alt: string;
}

export function QuestPreviewImage({alt, src, webpSrc}: QuestPreviewImageProps): JSX.Element {
  return (
    <picture>
      <source type='image/webp' srcSet={webpSrc} />
      <img src={src} srcSet={webpSrc} alt={alt} />
    </picture>
  );
}
