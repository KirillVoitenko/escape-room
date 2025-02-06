import { JSX } from 'react';
import type { SocialInfo } from '@widgets/layout/model';
import { SocialsListItem } from './socials-list-item';

type SocialsListProps = {
  socials: SocialInfo[];
}

export function SocialsList({ socials }: SocialsListProps): JSX.Element {
  return (
    <div className='socials'>
      <ul className='socials__list'>
        {socials.map((current) => <SocialsListItem socialInfo={current} key={current.name} />)}
      </ul>
    </div>
  );
}
