import React from "react";
// import { getDisplayedMonth } from "../../utils";
import "./header.scss";

const Header = ({ today, displayMonth }) => {
  // const displayMonth = getDisplayedMonth();

  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button">Today</button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{displayMonth}</span>
      </div>
    </header>
  );
};

export default Header;
