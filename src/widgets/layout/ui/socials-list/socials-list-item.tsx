import { ElementSize } from '@shared/model';
import type { SocialInfo } from '@widgets/layout/model';

type SocialsListItemProps = {
  socialInfo: SocialInfo;
};

const DEFAULT_ICON_SIZE: ElementSize = {
  width: 28,
  height: 28
};

export function SocialsListItem({ socialInfo }: SocialsListItemProps) {
  return (
    <li className='socials__item'>
      <a className='socials__link' href='#' aria-label={socialInfo.name} target='_blank' rel='nofollow noopener noreferrer'>
        <svg className='socials__icon socials__icon--default' width={DEFAULT_ICON_SIZE.width} height={DEFAULT_ICON_SIZE.height} aria-hidden>
          <use xlinkHref={socialInfo.xLinkDefault} />
        </svg>
        <svg className='socials__icon socials__icon--interactive' width={DEFAULT_ICON_SIZE.width} height={DEFAULT_ICON_SIZE.height} aria-hidden>
          <use xlinkHref={socialInfo.xLinkInteractive} />
        </svg>
      </a>
    </li>
  );
}
