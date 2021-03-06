import React from "react";
import Plot from "react-plotly.js";
const BasicLine = () => {
  var trace1 = {
    x: [1, 2, 3, 4, 5],
    y: [1, 3, 2, 3, 1],
    mode: "lines+markers",
    name: "linear",
    line: { shape: "linear" },
    type: "scatter",
  };

  var trace2 = {
    x: [1, 2, 3, 4, 5],
    y: [6, 8, 7, 8, 6],
    mode: "lines+markers",
    name: "spline",
    text: [
      'tweak line smoothness<br>with "smoothing" in line object',
      'tweak line smoothness<br>with "smoothing" in line object',
      'tweak line smoothness<br>with "smoothing" in line object',
      'tweak line smoothness<br>with "smoothing" in line object',
      'tweak line smoothness<br>with "smoothing" in line object',
      'tweak line smoothness<br>with "smoothing" in line object',
    ],
    line: { shape: "spline" },
    type: "scatter",
  };

  var trace3 = {
    x: [1, 2, 3, 4, 5],
    y: [11, 13, 12, 13, 11],
    mode: "lines+markers",
    name: "vhv",
    line: { shape: "vhv" },
    type: "scatter",
  };

  var trace4 = {
    x: [1, 2, 3, 4, 5],
    y: [16, 18, 17, 18, 16],
    mode: "lines+markers",
    name: "hvh",
    line: { shape: "hvh" },
    type: "scatter",
  };

  var trace5 = {
    x: [1, 2, 3, 4, 5],
    y: [21, 23, 22, 23, 21],
    mode: "lines+markers",
    name: "vh",
    line: { shape: "vh" },
    type: "scatter",
  };

  var trace6 = {
    x: [1, 2, 3, 4, 5],
    y: [26, 28, 27, 28, 26],
    mode: "lines+markers",
    name: "hv",
    line: { shape: "hv" },
    type: "scatter",
  };

  var data = [trace1, trace2, trace3, trace4, trace5, trace6];

  var layout = {
    width: 350,
    height: 300,
    title: "Line Options",
    legend: {
      y: 0.5,
      traceorder: "reversed",
      font: { size: 16 },
      yref: "paper",
    },
  };
  return (
    <div className="cool-shadow-plot" style={{ display: "inline-block" }}>
      <Plot data={data} layout={layout} />
    </div>
  );
};
export default BasicLine;
