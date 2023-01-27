import React from 'react';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';

import style from './ThisDay.module.scss';

const ThisDay = () => {
  return (
    <div className={style.this__day}>
      <div className={style.top__block}>
        <div className={style.top__block__wrapper}>
          <div className={style.this__temperature}>20 °C</div>
          <div className={style.this__day_name}>Today</div>
        </div>
        <GlobalSvgSelector id="weather-logo" />
      </div>
      <div className={style.bottom__block}>
        <div className={style.this__time}>
          Time: <span>10:42</span>
        </div>
        <div className={style.this__city}>
          City: <span>Krasnodar</span>
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
