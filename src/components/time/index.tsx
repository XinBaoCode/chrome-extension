import moment from 'moment';
import { useState } from 'react';
import { CommonProps } from '../utils';
import './index.less';

export type TimeProps = CommonProps & {};

const prefixCls = 'time';

const Time = (props: TimeProps) => {
  const { className, ...restProps } = props;
  const [hourAndMinute, setHourAndMinute] = useState<string>('');
  const [monthAndDayWeek, setMonthAndDayWeek] = useState<string>('');
  const getNewTime = () => {
    const hour_and_time = moment().locale('zh-cn').format('HH:mm:ss');
    const month_and_day = moment().locale('zh-cn').format('MM月DD日');
    const week = moment().locale('zh-cn').format('dddd');
    const month_and_day_week = `${month_and_day}  ${week}`;
    setHourAndMinute(hour_and_time);
    setMonthAndDayWeek(month_and_day_week);
  };

  setInterval(getNewTime, 1000);

  return (
    <div className={`time ${className}`} {...restProps}>
      <div className={`${prefixCls}-hourTime`}>{hourAndMinute}</div>
      <div className={`${prefixCls}-monthTime`}>{monthAndDayWeek}</div>
    </div>
  );
};

export default Time;
