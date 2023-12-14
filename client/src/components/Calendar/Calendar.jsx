import {  format } from "date-fns";
import React, { useState } from "react";
import './index.css'


import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({disabled}) => {
  const [startDate, setStartDate] = useState(format(new Date(), 'yyyy-MM-dd'));

  const changeDate = (event) => {
    setStartDate(event.target.value)
    console.log(event.target.value)
  }
  return (
    <>
      <label>Срок годности
      <input
        className="expiration__input"
        type="date"
        id="expiration"
        name="expiration-date"
        value={startDate}
        onChange={(event) => changeDate(event)}
        disabled={disabled}
        // min="2018-01-01"
        // max="2018-12-31"
      />
      </label>
    </>
  );
};

export default Calendar;
