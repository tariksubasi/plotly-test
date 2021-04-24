import React from "react";
import Plot from "react-plotly.js";
const BasicLine = () => {
  const trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: "scatter",
  };
  const trace2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],
    type: "scatter",
  };
  const data = [trace1, trace2];
  return (
    <div className="cool-shadow-plot" style={{ display: "inline-block" }}>
      <Plot
        data={data}
        layout={{ width: 350, height: 300, title: "Basic Line Chart" }}
      />
    </div>
  );
};
export default BasicLine;
