import React from "react";
import moment from "moment";
import { TimePicker, Space } from "antd";

const { RangePicker } = TimePicker;

export const DateIntervalInput = ({ value, onSelect }) => {
  const handleChange = (times) => {
    if (times) {
      const [start, end] = times;
      const today = moment().startOf("day");
      onSelect([
        {
          start: today
            .clone()
            .set({
              hour: start.hour(),
              minute: start.minute(),
              second: start.second(),
            })
            .toISOString(),
          end: today
            .clone()
            .set({
              hour: end.hour(),
              minute: end.minute(),
              second: end.second(),
            })
            .toISOString(),
        },
      ]);
    } else {
      onSelect([]);
    }
  };

  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        value={
          value.length > 0
            ? [
                value[0].start ? moment(value[0].start) : null,
                value[0].end ? moment(value[0].end) : null,
              ]
            : []
        }
        onChange={handleChange}
        format="HH:mm:ss" // Formats the display of time
      />
    </Space>
  );
};
