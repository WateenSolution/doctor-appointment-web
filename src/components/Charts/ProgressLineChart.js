import React from "react";
import { Progress } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export const ProgressLineChart = ({
  totalValue,
  coveredValue,
  trailColor,
  strokeColor,
  title,
  mT,
}) => {
  const percentage = (coveredValue / totalValue) * 100;

  return (
    <div style={{ marginTop: mT }}>
      <text className="lineText">{title}</text>
      <div className="progress-line-container">
        <div className="progress-line-value">{`${coveredValue}kWh`}</div>
        <Progress.Line
          percent={percentage}
          strokeColor={strokeColor}
          trailColor={trailColor}
          strokeWidth={20}
          showInfo={false}
        />
      </div>
    </div>
  );
};
