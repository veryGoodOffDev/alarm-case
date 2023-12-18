import {  format } from "date-fns";
import React, { useState } from "react";
import './index.css'


import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({disabled, date, onChange}) => {
  // const [startDate, setStartDate] = useState(format(new Date(), 'yyyy-MM-dd'));
 
  const handleChangeDate = ({target}) => {
    onChange(target.value)
    // console.log(event.target.value)
  }
  return (
    <>
      <label>Срок годности
      <input
        className="expiration__input"
        type="date"
        id="expiration"
        name="expiration-date"
        placeholder="Без срока годности"
        value={disabled?'':date}
        onChange={handleChangeDate}
        disabled={disabled}
        // min="2018-01-01"
        // max="2018-12-31"
      />
      </label>
    </>
  );
};

export default Calendar;
