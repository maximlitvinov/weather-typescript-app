import React from 'react';
import Card from './Card';

import style from './Days.module.scss';

type Props = {};

export type Day = {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
};

const Days = (props: Props) => {
  const days: Day[] = [
    {
      day: 'Mon',
      day_info: '1 February',
      icon_id: 'rain',
      temp_day: '+5',
      temp_night: '+1',
      info: 'Rain',
    },
    {
      day: 'Tue',
      day_info: '1 February',
      icon_id: 'mainly_cloudy',
      temp_day: '+5',
      temp_night: '+1',
      info: 'Rain',
    },
    {
      day: 'Wed',
      day_info: '1 February',
      icon_id: 'sun',
      temp_day: '+5',
      temp_night: '+1',
      info: 'Sun',
    },
    {
      day: 'Thu',
      day_info: '1 February',
      icon_id: 'small_rain_sun',
      temp_day: '+5',
      temp_night: '+1',
      info: 'Rain',
    },
    {
      day: 'Fri',
      day_info: '1 February',
      icon_id: 'small_rain',
      temp_day: '+5',
      temp_night: '+1',
      info: 'Small Rain',
    },
    {
      day: 'Sat',
      day_info: '1 February',
      icon_id: 'rain',
      temp_day: '+5',
      temp_night: '+1',
      info: 'Rain',
    },
    {
      day: 'Sun',
      day_info: '1 February',
      icon_id: 'rain',
      temp_day: '+5',
      temp_night: '+1',
      info: 'Rain',
    },
  ];
  return (
    <div className={style.days}>
      {days.map((day: Day) => (
        <Card day={day} />
      ))}
    </div>
  );
};

export default Days;
