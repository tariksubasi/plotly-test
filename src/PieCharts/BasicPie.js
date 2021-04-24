import React from "react";
import Plot from "react-plotly.js";
const BasicPie = () => {
  const data = [
    {
      values: [19, 26, 55],
      labels: ["Residential", "Non-Residential", "Utility"],
      type: "pie",
    },
  ];

  const layout = {
    title: "Basic Pie Chart",
    width: 400,
    height: 400,
  };

  return (
    <div className="cool-shadow-plot" style={{ display: "inline-block" }}>
      <Plot data={data} layout={layout} />
    </div>
  );
};
export default BasicPie;
