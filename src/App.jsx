import React, { useState, useEffect } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import Modal from "./components/modal/Modal.jsx";
import {
  getWeekStartDate,
  generateWeekRange,
  getDisplayedMonth,
} from "../src/utils/dateUtils.js";
import { getEventList, createEvent, deleteEvent } from "./gateway/events";
import moment from "moment";
import "./common.scss";

const App = () => {
  const [weekStartDate, setweekStartDate] = useState(new Date());

  const [openModal, setOpenModal] = useState(false);

  const [events, setEvents] = useState([]);

  const fetchEvents = () => getEventList().then(setEvents);
  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSubmit = (e, eventData) => {
    e.preventDefault();

    const { title, date, startTime, endTime, description } = eventData;

    const newEvent = {
      title,
      description,
      dateFrom: new Date(`${date} ${startTime}`),
      dateTo: new Date(`${date} ${endTime}`),
    };

    createEvent(newEvent).then((response) => fetchEvents(response));
    setOpenModal(false);
  };

  const onDeleteEvent = (id) =>
    deleteEvent(id).then((response) => fetchEvents(response));

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const displayMonth = getDisplayedMonth(weekStartDate);

  // button for header
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
      <Calendar
        weekDates={weekDates}
        events={events}
        onDeleteEvent={onDeleteEvent}
      />
      {openModal && (
        <Modal
          onCloseModal={() => setOpenModal(false)}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default App;
