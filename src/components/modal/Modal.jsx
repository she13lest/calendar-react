import React, { useState } from "react";
import { createEvent } from "../../gateway/events";
import "./modal.scss";

const Modal = ({ onCloseModal, isOpen, fetchEvents }) => {
  if (!isOpen) {
    return null;
  }

  const [event, setEvent] = useState({
    title: "",
    date: new Date(),
    startTime: "",
    endTime: "",
    description: "",
  });

  const onChangeData = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
  };

  const handleSubmit = (e, event) => {
    e.preventDefault();
    const { title, date, startTime, endTime, description } = event;

    const newEvent = {
      title,
      description,
      dateFrom: new Date(`${date} ${startTime}`),
      dateTo: new Date(`${date} ${endTime}`),
    };

    createEvent(newEvent).then((response) => fetchEvents(response));
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={onCloseModal}>
            +
          </button>
          <form className="event-form" onSubmit={handleSubmit}>
            <input
              value={title}
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={date}
                onChange={onChangeData}
              />
              <input
                value={startTime}
                type="time"
                name="startTime"
                className="event-form__field"
              />
              <span>-</span>
              <input
                value={endTime}
                type="time"
                name="endTime"
                className="event-form__field"
              />
            </div>
            <textarea
              value={description}
              name="description"
              placeholder="Description"
              className="event-form__field"
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
