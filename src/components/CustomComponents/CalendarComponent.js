import React, { useState } from "react";
import moment from "moment";
import { Row } from "antd";

export const CalendarComponent = ({
  boxWidth,
  boxHeight,
  borderRadius,
  wrapperBackgroundColor,
  selectedDate,
  setSelectedDate,
  viewOption,
  mT,
}) => {
  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const renderDailyCalendar = () => {
    const daysInMonth = moment().daysInMonth();
    const currentDate = moment().date();
    const calendarBoxes = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const date = moment().date(i);
      const isSelDate = selectedDate && selectedDate.isSame(date, "day");
      const isCurrentDate = i === currentDate;

      calendarBoxes.push(
        <div
          key={i}
          className={`calendar-box ${isSelDate ? "selected" : ""} ${
            isCurrentDate ? "current" : ""
          }`}
          onClick={() => handleDateSelection(date)}
          style={{
            width: boxWidth,
            height: boxHeight,
            borderRadius: borderRadius,
          }}
        >
          <div>{date.format("DD")}</div>
          <div>{date.format("ddd")}</div>
        </div>
      );
    }

    return calendarBoxes;
  };

  const renderMonthlyCalendar = () => {
    const months = moment.months();
    const currentMonth = moment().month();
    const calendarBoxes = [];

    for (let i = 0; i < months.length; i++) {
      const month = moment().month(i);
      const isSelMonth = selectedDate && selectedDate.isSame(month, "month");
      const isCurrentMonth = i === currentMonth;

      calendarBoxes.push(
        <div
          key={i}
          className={`calendar-box ${isSelMonth ? "selected" : ""} ${
            isCurrentMonth ? "current" : ""
          }`}
          onClick={() => handleDateSelection(month)}
          style={{
            width: boxWidth,
            height: boxHeight,
            borderRadius: borderRadius,
          }}
        >
          {month.format("MMM")}
        </div>
      );
    }

    return calendarBoxes;
  };

  const renderYearlyCalendar = () => {
    const currentYear = moment().year();
    const calendarBoxes = [];

    for (let i = 2000; i <= currentYear; i++) {
      const year = moment().year(i);
      const isSelYear = selectedDate && selectedDate.isSame(year, "year");
      const isCurrentYear = i === currentYear;

      calendarBoxes.push(
        <div
          key={i}
          className={`calendar-box ${isSelYear ? "selected" : ""} ${
            isCurrentYear ? "current" : ""
          }`}
          onClick={() => handleDateSelection(year)}
          style={{
            width: boxWidth,
            height: boxHeight,
            borderRadius: borderRadius,
          }}
        >
          {year.format("YYYY")}
        </div>
      );
    }

    return calendarBoxes;
  };

  const renderCalendar = () => {
    switch (viewOption) {
      case "daily":
        return renderDailyCalendar();
      case "monthly":
        return renderMonthlyCalendar();
      case "annual":
        return renderYearlyCalendar();
      default:
        return null;
    }
  };

  return (
    <div
      className="calendar-wrapper"
      style={{ backgroundColor: wrapperBackgroundColor, marginTop: mT }}
    >
      <Row align={"middle"} justify={"center"}>
        {renderCalendar()}
      </Row>
      {/* <div className="calendar-container">{renderCalendar()}</div> */}
    </div>
  );
};
