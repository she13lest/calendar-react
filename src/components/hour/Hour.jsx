import React from "react";
import Event from "../event/Event";
import RedLine from "../redline/RedLine.jsx";
import { formatMins } from "../../../src/utils/dateUtils.js";

const Hour = ({ dataHour, dataDay, hourEvents, onDeleteEvent }) => {
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {new Date().getHours() === dataHour &&
        new Date().getDate() === dataDay && <RedLine />}

      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${new Date(dateFrom).getHours()}:${formatMins(
          new Date(dateFrom).getMinutes()
        )}`;
        const eventEnd = `${new Date(dateTo).getHours()}:${formatMins(
          new Date(dateTo).getMinutes()
        )}`;

        return (
          <Event
            key={id}
            //calculating event height = duration of event in minutes
            height={
              (new Date(dateTo).getTime() - new Date(dateFrom).getTime()) /
              (1000 * 60)
            }
            marginTop={new Date(dateFrom).getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            onDeleteEvent={onDeleteEvent}
          />
        );
      })}
    </div>
  );
};

export default Hour;
