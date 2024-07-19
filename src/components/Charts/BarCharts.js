import { useMediaQuery } from "@mui/material";
import React, { useState } from "react";

import {
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { strokeColor } from "../../utilities";

export const BarCharts = ({
  data,
  title,
  nameKey,
  dataKey1,
  dataKey2,
  dataKey3,
  dataKeys,
  showGridHorizontal,
  showGridVertical,
  mT,
  xAxisLabel,
  yAxisLabel,
  fill1,
  fill2,
  fill3,
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
  const [hiddenLines, setHiddenLines] = useState([]);

  const handleLegendClick = (lineIndex) => {
    setHiddenLines((prevHiddenLines) => {
      if (prevHiddenLines.includes(lineIndex)) {
        return prevHiddenLines.filter((index) => index !== lineIndex);
      } else {
        return [...prevHiddenLines, lineIndex];
      }
    });
  };

  return (
    <ResponsiveContainer width="98%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 50, right: 10, left: 0, bottom: 60 }}
      >
        {data?.length < 7 ? (
          <XAxis
            tick={{ fontSize: 10 }}
            dataKey={nameKey}
            interval={0}
            angle={isMobileView ? -60 : 0}
            textAnchor={isMobileView ? "end" : "middle"}
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
        <Legend
          verticalAlign="top"
          height={40}
          onClick={(_, payload) => handleLegendClick(payload)}
        />

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

        {dataKeys?.map((item, index) => (
          <Bar
            maxBarSize={20}
            dataKey={item}
            fill={fill2 || strokeColor[index % strokeColor.length]}
            hide={hiddenLines.includes(index)}
          />
        ))}

        <text
          x={yAxisLabelMargin}
          y="50%"
          transform={`rotate(-90, ${yAxisLabelMargin}, ${400 / 2})`}
          textAnchor="middle"
          dominantBaseline="hanging"
          style={{ marginLeft: yAxisLabelMargin }}
        >
          {yAxisLabel}
        </text>
        <Brush dataKey="name" height={20} y={10} x={48} />
      </BarChart>
    </ResponsiveContainer>
  );
};
