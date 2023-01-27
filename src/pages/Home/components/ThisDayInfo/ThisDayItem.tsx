import React from 'react';
import IndicatorSvgSelector from '../../../../assets/icons/indicators/IndicatorSvgSelector';

import { Item } from './ThisDayInfo';
import style from './ThisDayInfo.module.scss';

type Props = {
  item: Item;
};

const ThisDayItem = ({ item }: Props) => {
  const { icon_id, name, value } = item;
  return (
    <div className={style.item}>
      <div className={style.indicator}>
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <div className={style.indicator__name}>{name}</div>
      <div className={style.indicator__value}>{value}</div>
    </div>
  );
};

export default ThisDayItem;
