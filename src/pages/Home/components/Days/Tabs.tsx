import React from 'react';

import style from './Days.module.scss';

type Props = {};

const Tabs = (props: Props) => {
  const tabs = [{ value: 'Weekly' }, { value: 'For 10 days' }, { value: 'For the month' }];
  return (
    <div className={style.tabs}>
      <div className={style.tabs__wrapper}>
        {tabs.map((tab) => (
          <div className={style.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={style.cancel}>Cancel</div>
    </div>
  );
};

export default Tabs;
