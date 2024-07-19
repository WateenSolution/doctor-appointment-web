import React from "react";
import { ChartCard } from "..";
import { perfRatioHeatmap } from "../../utilities";
import ReactApexChart from "react-apexcharts";

export const HeatChart = ({ data }) => {
  const options = React.useMemo(
    () => ({
      chart: {
        height: 350,
        type: "heatmap",
        toolbar: { show: false },
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          radius: 0,
          useFillColorAsStroke: false,

          colorScale: {
            ranges: [
              { from: 0, to: 20, name: "0-20", color: "#ff0000" },
              { from: 20, to: 40, name: "20-40", color: "#ffa500" },
              { from: 40, to: 60, name: "40-60", color: "#ffff00" },
              { from: 60, to: 80, name: "60-80", color: "#5072A7" },
              { from: 80, to: 100, name: "80-100", color: "#228b22" },
              { from: 100, to: 1000, name: ">100", color: "#228b22" },
            ],
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
    }),
    []
  );

  return (
    <div className="heatChartCon">
      <ReactApexChart
        options={options}
        series={data}
        type="heatmap"
        height={350}
      />
    </div>
  );
};
