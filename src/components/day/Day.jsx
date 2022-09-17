import React from "react";
import Hour from "../hour/Hour";

import "./day.scss";

const Day = ({ onDeleteEvent, dataDay, dayEvents }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => new Date(event.dateFrom).getHours() === hour
        );

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            dataDay={dataDay}
            hourEvents={hourEvents}
            onDeleteEvent={onDeleteEvent}
          />
        );
      })}
    </div>
  );
};

export default Day;
