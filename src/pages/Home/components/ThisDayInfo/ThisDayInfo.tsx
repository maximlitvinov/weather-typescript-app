import React from 'react';
import style from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import ThisDayItem from './ThisDayItem';

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}
const ThisDayInfo = () => {
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
    <div className={style.this__day_info}>
      <div className={style.this__day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img src={cloud} className={style.cloud__img} alt="cloud" />
    </div>
  );
};

export default ThisDayInfo;
