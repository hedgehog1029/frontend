import React from 'react';
import cx from 'classnames';
import moment from 'moment';
import OnAirBadge from './OnAirBadge';

function ScheduleSlotTime(props) {
  const { slot } = props;
  const timeFormat = 'h:mma';
  const momentFrom = moment(slot.from_time);
  const momentTo = moment(slot.to_time);

  const fromElement = (
    <span
      className={cx('ScheduleSlot__time-item', {
        'ScheduleSlot__time-item--continuation': slot.is_overnight && props.index === 0,
      })}
    >
      {momentFrom.format(timeFormat)}
    </span>
  );

  const toElement = (
    <span
      className={cx('ScheduleSlot__time-item', {
        'ScheduleSlot__time-item--continuation': slot.is_overnight && props.index !== 0,
      })}
    >
      {momentTo.format(timeFormat)}
    </span>
  );

  return (
    <div className="ScheduleSlot__time">
      {fromElement} - {toElement}
      {props.onAir ? <OnAirBadge /> : null}
    </div>
  );
}

ScheduleSlotTime.propTypes = {
  slot: React.PropTypes.object.isRequired,
  index: React.PropTypes.number.isRequired,
  onAir: React.PropTypes.bool.isRequired,
};

export default ScheduleSlotTime;
