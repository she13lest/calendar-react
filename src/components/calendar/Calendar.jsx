import React, { useState, useEffect } from "react";

import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";
import events from "../../gateway/events";

import "./calendar.scss";

const Calendar = ({ weekDates }) => {
  const [listOfEvents, setEvents] = useState([]);

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} listOfEvents={listOfEvents} />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
