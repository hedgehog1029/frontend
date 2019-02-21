import React from 'react';
import cx from 'classnames';
// import Color from 'color';
import { Link } from 'react-router-dom';
import ScheduleSlotTime from './ScheduleSlotTime';

interface IProps {
  calculateWidth: any; // todo
  onAir: boolean;
  slot: any; // todo
  index: number;
}

function ScheduleSlot(props: IProps) {
  const slot = props.slot;
  const show = props.slot.show;
  const showColor = show && show.category ? show.category.color : 'eee';

  const scheduleSlotClasses = cx(
    'ScheduleSlot',
    !!show.category ? `ScheduleSlot--tone-light` : '',
    {
      'ScheduleSlot--overnight': slot.is_overnight,
      'ScheduleSlot--on-air': props.onAir,
    },
  );

  let onAirGlow: { boxShadow?: string } = {};

  if (props.onAir) {
    // let color;
    // try {
    //   color = Color(`#${showColor}`);
    // } catch (e) {
    //   color = Color('#ffffff');
    // }
    //
    // color = color.rgb().array();
    onAirGlow.boxShadow = `0 0 24px rgba(20, 20, 20, 0.3)`;
  }

  return (
    <div
      className={scheduleSlotClasses}
      style={{
        width: `${props.calculateWidth(slot.duration)}px`,
        ...onAirGlow,
      }}
    >
      <Link
        className="ScheduleSlot__inner"
        style={{ backgroundColor: `#${showColor}` }}
        to={`/shows/${show.slug}`}
      >
        <ScheduleSlotTime slot={slot} onAir={props.onAir} index={props.index} />
        <div className="ScheduleSlot__show-name">{show.name}</div>
      </Link>
    </div>
  );
}

export default ScheduleSlot;
