import React from "react";
import Plot from "react-plotly.js";

const LineScatter = () => {
  const trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: "markers",
    type: "scatter",
  };

  const trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: "lines",
    type: "scatter",
  };

  const trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: "lines+markers",
    type: "scatter",
  };

  const data = [trace1, trace2, trace3];
  return (
    <div className="cool-shadow-plot" style={{ display: "inline-block" }}>
      <Plot
        data={data}
        layout={{ width: 350, height: 300, title: "Line & Scatter Plot" }}
      />
    </div>
  );
};

export default LineScatter;
