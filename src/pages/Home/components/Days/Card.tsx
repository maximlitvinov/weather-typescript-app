import React from 'react';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';

import { Day } from './Days';
import style from './Days.module.scss';

type Props = {
  day: Day;
};

const Card = ({ day }: Props) => {
  return (
    <div className={style.card}>
      <div className={style.day}>{day.day}</div>
      <div className={style.day__info}>{day.day_info}</div>
      <div className={style.img}>
        <GlobalSvgSelector id={day.icon_id} />
      </div>
      <div className={style.temp__day}>{day.temp_day}</div>
      <div className={style.temp__night}>{day.temp_night}</div>
      <div className={style.info}>{day.info}</div>
    </div>
  );
};

export default Card;
