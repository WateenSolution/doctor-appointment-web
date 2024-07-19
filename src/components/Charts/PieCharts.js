import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

export const PieCharts = ({
  title,
  data,
  innerRadius,
  outerRadius,
  chartColors,
  height,
  width,
  bgColor,
}) => {
  const renderLegendIcon = ({ color }) => (
    <svg width="10" height="10">
      <circle cx="5" cy="5" r="5" fill={color} />
    </svg>
  );

  return (
    <div
      style={{
        width: width || "98%",
        height: height || 300,
        backgroundColor: bgColor,
        borderRadius: "10px",
      }}
    >
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius || 40}
            outerRadius={outerRadius || 100}
            fill="#5072A7"
            dataKey="value"
            label={({ percent }) => `${Math.round(percent * 100)}%`}
          >
            {data.map((item, index) => (
              <Cell
                key={`cell-${index}`}
                fill={chartColors[index % chartColors.length]}
              />
            ))}
          </Pie>
          <Legend />

          {/* <Legend
            layout="horizontal"
            align="center"
            iconSize={10}
            icon={renderLegendIcon}
            formatter={(value) => (
              <span style={{ fontWeight: "bold" }}>{value}</span>
            )}
          /> */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
