import React from 'react';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import Select from 'react-select';

import style from './Header.module.scss';

function Header() {
  const options = [
    { value: 'city-1', label: 'Krasnodar' },
    { value: 'city-2', label: 'Moscow' },
    { value: 'city-3', label: 'Saint Petersburg' },
  ];
  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 0 ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      fontWeight: 600,
    }),
    singValue: (styles: any) => ({
      ...styles,
      color: 1 ? '#fff' : '#000',
    }),
  };
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={style.title}>React + TypeScript Weather</div>
      </div>
      <div className={style.wrapper}>
        <div className={style.change_theme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select defaultValue={options[0]} styles={colorStyles} options={options} />
      </div>
    </header>
  );
}

export default Header;
