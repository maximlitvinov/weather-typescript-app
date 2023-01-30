import React from 'react';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';

import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import ThisDayItem from '../../pages/Home/components/ThisDayInfo/ThisDayItem';

import style from './Popup.module.scss';

type Props = {};

const Popup = (props: Props) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Temperature',
      value: '20',
    },
    {
      icon_id: 'pressure',
      name: 'Pressure',
      value: '765mm',
    },
    {
      icon_id: 'precipitation',
      name: 'Precipitation',
      value: 'Without precipitation',
    },
    {
      icon_id: 'wind',
      name: 'Wind',
      value: '3 m/s',
    },
  ];
  return (
    <>
      <div className={style.blur}></div>
      <div className={style.popup}>
        <div className={style.day}>
          <div className={style.day__temp}>20 °C</div>
          <div className={style.day__name}>Wednesday</div>
          <div className={style.img}>
            <GlobalSvgSelector id="rain" />
          </div>
          <div className={style.day__time}>
            Time: <span>10:42</span>
          </div>
          <div className={style.day__city}>
            City: <span>Krasnodar</span>
          </div>
        </div>
        <div className={style.this__day_info}>
          <div className={style.this__day_info_items}>
            {items.map((item: Item) => (
              <ThisDayItem key={item.icon_id} item={item} />
            ))}
          </div>
        </div>
        <div className={style.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};

export default Popup;
