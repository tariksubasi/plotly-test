import React from "react";
import Plot from "react-plotly.js";

const BarRotatedLabels = () => {
  const trace1 = {
    x: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
    type: "bar",
    name: "Prod 1",
    marker: {
      color: "rgb(49,130,189)",
      opacity: 0.7,
    },
  };
  const trace2 = {
    x: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16],
    type: "bar",
    name: "Prod 2",
    marker: {
      color: "rgb(204,204,204)",
      opacity: 0.5,
    },
  };
  const data = [trace1, trace2];
  const layout = {
    width: 350,
    height: 300,
    title: "Bar Rotated X Axis",
    xaxis: {
      tickangle: -45,
    },
    barmode: "group",
  };
  return (
    <div className="cool-shadow-plot" style={{ display: "inline-block" }}>
      <Plot data={data} layout={layout} />
    </div>
  );
};

export default BarRotatedLabels;
