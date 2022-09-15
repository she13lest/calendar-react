import React, { useState } from "react";

import "./modal.scss";

const Modal = ({ onCloseModal, isOpen, handleSubmit }) => {
  if (!isOpen) {
    return null;
  }

  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
  });

  const onChangeData = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={onCloseModal}>
            +
          </button>
          <form
            className="event-form"
            onSubmit={(e) => handleSubmit(e, eventData)}
          >
            <input
              value={title}
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              onChange={onChangeData}
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
                onChange={onChangeData}
              />
              <span>-</span>
              <input
                value={endTime}
                type="time"
                name="endTime"
                className="event-form__field"
                onChange={onChangeData}
              />
            </div>
            <textarea
              value={description}
              name="description"
              placeholder="Description"
              className="event-form__field"
              onChange={onChangeData}
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
