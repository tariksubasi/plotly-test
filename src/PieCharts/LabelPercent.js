import React from "react";
import Plot from "react-plotly.js";
const BasicPie = () => {
  const data = [
    {
      type: "pie",
      values: [2, 3, 4, 4],
      labels: ["Wages", "Operating expenses", "Cost of sales", "Insurance"],
      textinfo: "label+percent",
      textposition: "outside",
      automargin: true,
    },
  ];

  const layout = {
    title: "Basic Pie Chart",
    width: 400,
    height: 400,
    margin: {"t": 0, "b": 0, "l": 0, "r": 0},
    showlegend: false
  };

  return (
    <div className="cool-shadow-plot" style={{ display: "inline-block" }}>
      <Plot data={data} layout={layout} />
    </div>
  );
};
export default BasicPie;
