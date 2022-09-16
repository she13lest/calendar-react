import React from "react";
import Event from "../event/Event";
import RedLine from "../redline/RedLine.jsx";
import { formatMins } from "../../../src/utils/dateUtils.js";

const Hour = ({ dataHour, dataDay, hourEvents, onDeleteEvent }) => {
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {new Date().getHours() === dataHour && dataDay && <RedLine />}

      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(
          dateFrom.getMinutes()
        )}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(
          dateTo.getMinutes()
        )}`;

        return (
          <Event
            key={id}
            //calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            id={id}
            onDeleteEvent={onDeleteEvent}
          />
        );
      })}
    </div>
  );
};

export default Hour;
