import { useMediaQuery } from "@mui/material";
import React from "react";

import {
  Bar,
  Line,
  BarChart,
  Brush,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const CompBarCharts = ({
  data,
  title,
  nameKey,
  dataKey1,
  dataKey2,
  dataKey3,
  dataKey4,
  showGridHorizontal,
  showGridVertical,
  mT,
  xAxisLabel,
  yAxisLabel,
  fill1,
  fill2,
  fill3,
  bgColor,
  height,
  width,
}) => {
  const xAxisLabelMargin = 20;
  const yAxisLabelMargin = 10;
  const isMobileView = useMediaQuery("(max-width: 1000px)");
  const CustomXAxisTick = ({ x, y, payload }) => {
    const words = payload.value.split(" ");
    const maxWordsPerLine = 4;
    const lines = [];
    let line = "";

    words.forEach((word, index) => {
      if (index > 0 && index % maxWordsPerLine === 0) {
        lines.push(line);
        line = word;
      } else {
        line += ` ${word}`;
      }
    });

    lines.push(line);
    if (data?.length <= 40) {
      return (
        <g transform={`translate(${x},${y})`}>
          {lines.map((text, index) => (
            <text
              key={index}
              x={0}
              y={index * 12}
              dy={16}
              fontSize={10}
              textAnchor="end"
              transform="rotate(-45)"
            >
              {`${text?.slice(0, 12)} ${text?.length > 20 ? "..." : ""}`}
            </text>
          ))}
        </g>
      );
    }
  };

  return (
    <div
      style={{
        width: "98%",
        height: 400,
        backgroundColor: bgColor || "#FFF",
        borderRadius: "10px",
      }}
    >
      <ResponsiveContainer width="98%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 50, right: 10, left: 0, bottom: 60 }}
        >
          {data?.length < 7 ? (
            <XAxis
              dataKey={nameKey}
              interval={0}
              textAnchor={isMobileView ? "end" : "middle"}
              style={{ whiteSpace: "normal" }}
              tick={<CustomXAxisTick isMobileView={isMobileView} />}
            />
          ) : (
            <>
              {!isMobileView && (
                <XAxis
                  dataKey={nameKey}
                  textAnchor="end"
                  interval={0}
                  tick={<CustomXAxisTick isMobileView={isMobileView} />}
                />
              )}
            </>
          )}
          <YAxis />
          <CartesianGrid
            stroke="rgba(193, 187, 235, 1)"
            horizontal={showGridHorizontal || false}
            vertical={showGridVertical || false}
          />
          {!isMobileView && <Tooltip cursor={{ fill: "transparent" }} />}
          <Legend verticalAlign="top" height={40} />
          <Line type="monotone" dataKey={dataKey4} stroke="#000075" />

          {dataKey1 && (
            <Bar
              maxBarSize={20}
              dataKey={dataKey1}
              fill={fill1 || "var(--gr1)"}
            />
          )}
          {dataKey2 && (
            <Bar
              maxBarSize={20}
              dataKey={dataKey2}
              fill={fill2 || "var(--color-wateen)"}
            />
          )}
          {dataKey3 && (
            <Bar
              maxBarSize={20}
              dataKey={dataKey3}
              fill={fill3 || "var(--color-wateen)"}
            />
          )}

          <span
            x={yAxisLabelMargin}
            y="50%"
            transform={`rotate(-90, ${yAxisLabelMargin}, ${400 / 2})`}
            textAnchor="middle"
            dominantBaseline="hanging"
            style={{ marginLeft: yAxisLabelMargin }}
          >
            {yAxisLabel}
          </span>
          <Brush dataKey="name" height={20} y={10} x={48} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
