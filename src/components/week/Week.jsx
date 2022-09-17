import React from "react";
import Day from "../day/Day";
import "./week.scss";

const Week = ({ weekDates, events, onDeleteEvent }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );
        // const dayEvents = events.filter((event) => {
        //   new Date(event.dateFrom) > new Date(dayStart) &&
        //     new Date(event.dateTo) < new Date(dayEnd);
        // });

        const dayEvents = events.filter(
          (event) =>
            new Date(event.dateFrom) > new Date(dayStart) &&
            new Date(event.dateTo) < new Date(dayEnd)
        );
        console.log(dayEvents);

        return (
          <Day
            onDeleteEvent={onDeleteEvent}
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
          />
        );
      })}
    </div>
  );
};

export default Week;
// (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
