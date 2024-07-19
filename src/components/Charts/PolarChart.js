import React from "react";
import ReactApexChart from "react-apexcharts";

export const PolarChart = ({ data }) => {
  const options = React.useMemo(() => ({
    chart: {
      height: 350,
      type: "polarArea",
      toolbar: { show: false },
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
        polygon: {
          strokeColors: ["#ffffff"],
          connectorColors: ["#ffffff"],
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      color: "#ffffff",
    },
    exporting: {
      enabled: false,
    },
    labels: data.map((data) => data?.name),
    colors: ["var(--gr1)", "var(--o1)", "var(--y1)"],
  }));

  return (
    <div className="polarChartCon">
      <ReactApexChart
        options={options}
        series={data.map((data) => data?.value)}
        type="polarArea"
        height={350}
      />
    </div>
  );
};
