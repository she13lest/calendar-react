import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import Modal from "./components/modal/Modal.jsx";
import {
  getWeekStartDate,
  generateWeekRange,
  getDisplayedMonth,
} from "../src/utils/dateUtils.js";
import moment from "moment";
import "./common.scss";

const App = () => {
  const [weekStartDate, setweekStartDate] = useState(new Date());

  const [openModal, setOpenModal] = useState(false);

  const [listOfEvents, setEvents] = useState([]);

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const displayMonth = getDisplayedMonth(weekStartDate);

  const nextWeek = () => {
    setweekStartDate(moment(weekStartDate).add(1, "w").toDate());
  };
  const previousWeek = () => {
    setweekStartDate(moment(weekStartDate).subtract(1, "w").toDate());
  };
  const today = () => {
    setweekStartDate(new Date());
  };

  return (
    <>
      <Header
        displayMonth={displayMonth}
        today={today}
        nextWeek={nextWeek}
        previousWeek={previousWeek}
        onOpenModal={() => setOpenModal(true)}
      />
      <Calendar weekDates={weekDates} listOfEvents={listOfEvents} />
      <Modal onCloseModal={() => setOpenModal(false)} isOpen={openModal} />
    </>
  );
};

export default App;
