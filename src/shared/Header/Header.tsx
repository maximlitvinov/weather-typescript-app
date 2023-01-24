import React from 'react';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';

import style from './Header.module.scss';
type Props = {};

function Header({}: Props) {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={style.title}>React+TypeScript Weather</div>
      </div>
      <div className={style.wrapper}></div>
    </header>
  );
}

export default Header;
