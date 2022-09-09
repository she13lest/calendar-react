import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import {
  getWeekStartDate,
  generateWeekRange,
  getDisplayedMonth,
} from "../src/utils/dateUtils.js";
import moment from "moment";
import "./common.scss";

const App = () => {
  const [weekStartDate, setweekStartDate] = useState(new Date());

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const displayMonth = getDisplayedMonth(weekStartDate);

  const nextWeek = () => {
    setweekStartDate(moment(weekStartDate).add(1, "w"));
  };

  const previousWeek = () => {
    setweekStartDate(moment(weekStartDate).subtract(1, "w"));
  };

  return (
    <>
      <Header
        displayMonth={displayMonth}
        weekStartDate={weekStartDate}
        nextWeek={nextWeek}
        previousWeek={previousWeek}
      />
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
