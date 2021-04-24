import React from "react";
import Plot from "react-plotly.js";

const StackedBar = () => {
  const trace1 = {
    x: ["giraffes", "orangutans", "monkeys"],
    y: [20, 14, 23],
    name: "SF Zoo",
    type: "bar",
  };

  const trace2 = {
    x: ["giraffes", "orangutans", "monkeys"],
    y: [12, 18, 29],
    name: "LA Zoo",
    type: "bar",
  };

  const data = [trace1, trace2];

  const layout = {
    width: 350,
    height: 300,
    title: "Stacked Bar Chart",
    barmode: "stack",
  };
  return (
    <div className="cool-shadow-plot" style={{ display: "inline-block" }}>
      <Plot data={data} layout={layout} />
    </div>
  );
};

export default StackedBar;
