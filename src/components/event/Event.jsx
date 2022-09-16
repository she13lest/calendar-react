import React, { useState } from "react";
import "./event.scss";

const Event = ({ height, marginTop, title, time, id, onDeleteEvent }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div style={eventStyle} className="event" onClick={handleToggle}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <button className="delete-event-btn" onClick={() => onDeleteEvent(id)}>
        Delete
        <i className="far fa-trash-alt delete-event-btn__icon"></i>
      </button>
    </div>
  );
};

export default Event;
