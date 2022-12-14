import React, { useState } from "react";
import moment from "moment";
import "./navigation.scss";

import { days } from "../../utils/dateUtils.js";

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => (
        <div
          key={dayDate.getDate()}
          className={
            dayDate.toDateString() === new Date().toDateString()
              ? "currentDayStyle calendar__day-label day-label"
              : "calendar__day-label day-label"
          }
        >
          <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
          <span className="day-label__day-number">{dayDate.getDate()}</span>
        </div>
      ))}
    </header>
  );
};

export default Navigation;
