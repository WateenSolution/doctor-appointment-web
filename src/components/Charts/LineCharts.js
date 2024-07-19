import { useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import {
  Area,
  AreaChart,
  Brush,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  defs,
  linearGradient,
  stop,
} from "recharts";

import { strokeColor } from "../../utilities";

export const LineCharts = ({
  data,
  nameKey,
  dataKey,
  showGridHorizontal,
  showGridVertical,
  xAxisLabel,
  yAxisLabel,
}) => {
  const xAxisLabelMargin = 20;
  const yAxisLabelMargin = 10;
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

  const isMobile = useMediaQuery("(max-width: 480px)");
  const legendSize = isMobile ? 0 : 70;

  // Custom Tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <div
            style={{
              width: payload?.length > 3 ? "50%" : "100%",
              paddingRight: 5,
            }}
          >
            <div style={{ color: "#8884d8", fontSize: 12 }}>
              {payload[0]?.payload[nameKey]}
            </div>
            {payload.slice(0, Math.ceil(payload.length / 2)).map((pld) => (
              <div
                key={pld.dataKey}
                style={{ color: pld?.color, fontSize: 12 }}
              >{`${pld.dataKey}: ${pld?.value}`}</div>
            ))}
          </div>
          <div style={{ width: payload?.length > 3 ? "50%" : "100%" }}>
            {payload.slice(Math.ceil(payload.length / 2)).map((pld) => (
              <div
                key={pld.dataKey}
                style={{ color: pld?.color, fontSize: 12 }}
              >{`${pld.dataKey}: ${pld?.value}`}</div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="98%" height={400}>
      <AreaChart
        data={data}
        margin={{ top: 50, right: 25, left: 0, bottom: 40 }}
      >
        {!isMobile && (
          <Legend
            verticalAlign="top"
            height={legendSize}
            onClick={(_, payload) => handleLegendClick(payload)}
          />
        )}

        <defs>
          {dataKey?.map((_, index) => (
            <linearGradient
              key={index}
              id={`color${index}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor={strokeColor[index % strokeColor.length]}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={strokeColor[index % strokeColor.length]}
                stopOpacity={0}
              />
            </linearGradient>
          ))}
        </defs>

        <XAxis dataKey={nameKey} angle={300} tickMargin={30} />
        <YAxis />
        <CartesianGrid
          stroke="#e8e8e8"
          horizontal={showGridHorizontal || false}
          vertical={showGridVertical || false}
        />
        <Tooltip content={<CustomTooltip />} />

        {dataKey?.map((item, index) => (
          <Area
            key={index}
            type="linear"
            dataKey={item}
            stroke={strokeColor[index % strokeColor.length]}
            fill={`url(#color${index})`}
            strokeWidth={2}
            dot={{ r: 0 }}
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
      </AreaChart>
    </ResponsiveContainer>
  );
};
