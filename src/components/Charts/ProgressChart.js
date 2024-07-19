import React from "react";
import ReactApexChart from "react-apexcharts";

export const ProgressChart = ({
  data,
  height,
  width,
  strokeWidth,
  hollowSize,
  labelFontSize,
  valueFontSize,
  label,
}) => {
  const chartData = data || 0;
  const options = React.useMemo(() => ({
    chart: {
      type: "radialBar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: hollowSize || "70%",
          background: "#fff",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: "#fff",
          strokeWidth: strokeWidth || "67%",
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
            fontSize: labelFontSize || "17px",
          },
          value: {
            formatter: function (val) {
              return `${parseInt(val)}%`;
            },
            color: "#111",
            fontSize: valueFontSize || "36px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      colors: ["#5072A7"],
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#000075"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: [label || ""],
  }));

  return (
    <div className="progressChartCon">
      <ReactApexChart
        options={options}
        series={[chartData]}
        type="radialBar"
        height={height}
        width={width}
      />
    </div>
  );
};
