import React, { useState, useEffect } from "react";
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
    setweekStartDate(moment(weekStartDate).add("days", 7));
  };

  const previousWeek = () => {
    setweekStartDate(moment(weekStartDate).subtract("days", 7));
  };

  return (
    <>
      <Header displayMonth={displayMonth} today={weekStartDate} />
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
