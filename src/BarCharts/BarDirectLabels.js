import React from "react";
import Plot from "react-plotly.js";

const BarDirectLabels = () => {
  const xValue = ["Product A", "Product B", "Product C"];
  const yValue = [20, 14, 23];
  const trace1 = {
    x: xValue,
    y: yValue,
    type: "bar",
    text: yValue.map(String),
    textposition: "auto",
    hoverinfo: "none",
    marker: {
      color: "rgb(158,202,225)",
      opacity: 0.6,
      line: {
        color: "rgb(8,48,107)",
        width: 1.5,
      },
    },
  };
  const data = [trace1];
  const layout = {
    width: 350,
    height: 300,
    title: "Bar Direct Labels",
    barmode: "stack",
  };
  return (
    <div className="cool-shadow-plot" style={{ display: "inline-block" }}>
      <Plot data={data} layout={layout} />
    </div>
  );
};

export default BarDirectLabels;
