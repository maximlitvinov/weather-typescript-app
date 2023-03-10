import React from 'react';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import Select from 'react-select';

import style from './Header.module.scss';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';

function Header() {
  const theme = useTheme();
  const options = [
    { value: 'city-1', label: 'Krasnodar' },
    { value: 'city-2', label: 'Moscow' },
    { value: 'city-3', label: 'Saint Petersburg' },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      background: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      fontWeight: 600,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#FFFF' : '#000',
    }),
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={style.title}>React + TypeScript Weather</div>
      </div>
      <div className={style.wrapper}>
        <div className={style.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select defaultValue={options[0]} styles={colourStyles} options={options} />
      </div>
    </header>
  );
}

export default Header;
