import { RoutesEnum, ElementSize } from '@shared/model';
import { JSX } from 'react';
import { Link } from 'react-router-dom';

const LOGO_SIZE: ElementSize = {
  height: 52,
  width: 134,
};

export function Logo(): JSX.Element {
  return (
    <Link to={RoutesEnum.Main} className='logo header__logo'>
      <svg width={LOGO_SIZE.width} height={LOGO_SIZE.height} aria-hidden>
        <use xlinkHref="#logo"></use>
      </svg>
    </Link>
  );
}
