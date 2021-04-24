import React from "react";
import Plot from "react-plotly.js";

const GroupedBarDirectLabels = () => {
  const xValue = ["Product A", "Product B", "Product C"];

  const yValue = [20, 14, 23];
  const yValue2 = [24, 16, 20];

  const trace1 = {
    x: xValue,
    y: yValue,
    type: "bar",
    text: yValue.map(String),
    textposition: "auto",
    hoverinfo: "none",
    opacity: 0.5,
    marker: {
      color: "rgb(158,202,225)",
      line: {
        color: "rgb(8,48,107)",
        width: 1.5,
      },
    },
  };

  const trace2 = {
    x: xValue,
    y: yValue2,
    type: "bar",
    text: yValue2.map(String),
    textposition: "auto",
    hoverinfo: "none",
    marker: {
      color: "rgba(58,200,225,.5)",
      line: {
        color: "rgb(8,48,107)",
        width: 1.5,
      },
    },
  };

  const data = [trace1, trace2];

  const layout = {
    width: 350,
    height: 300,
    title: "January 2013 Sales Report",
  };

  return (
    <div className="cool-shadow-plot" style={{ display: "inline-block" }}>
      <Plot data={data} layout={layout} />
    </div>
  );
};

export default GroupedBarDirectLabels;
