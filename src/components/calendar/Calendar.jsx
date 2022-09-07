import React, { useState } from "react";

import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";
import events from "../../gateway/events";
import moment from "moment";
import "./calendar.scss";

const Calendar = ({ weekDates }) => {
  const formatedDay = moment().format("DD/MM/YYYY");
  const [today] = useState(formatedDay);

  return (
    <section className="calendar">
      <Navigation today={today} weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} events={this.state.events} />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
