import React, { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateClick = (date) => {
    // Handle the click event for the selected date
    // You can use this callback to display additional information or perform other tasks
    console.log("Clicked date:", date);
    // You can update state or perform other actions based on the clicked date
    setSelectedDate(date);
  };

  const tileContent = ({ date, view }) => {
    // Customize the content for each date tile
    const day = date.getDate();
    const labels = {
      1: "loss",
      5: "profit",
      10: "Label 3",
      // Add more date-label mappings as needed
    };

    return (
      <div className={`${labels[day] === "loss" && "danger"}`}>
        {/* <div>{day}</div> */}
        {labels[day] && <div>{labels[day]}</div>}
        {/* Add more content as needed */}
      </div>
    );
  };
  const tileClassName = ({ date, view }) => {
    // Customize the class for each date tile
    return date.getTime() === selectedDate.getTime() ? "custom-active" : "";
  };
  return (
    <div style={{ height: "100vh" }}>
      Calendar
      <Calendar
        onChange={handleDateClick}
        value={selectedDate}
        tileContent={tileContent}
        tileClassName={tileClassName}
      />
      {/* Display additional information or perform other actions based on selectedDate */}
      <div>
        Selected date: {selectedDate.toDateString()}
        {/* Add more details or components based on your requirements */}
      </div>
    </div>
  );
}

export default MyCalendar;
