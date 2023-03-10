import React from 'react';

import Days from './components/Days/Days';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';

import style from './Home.module.scss';

type Props = {};

const Home = (props: Props) => {
  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};

export default Home;
