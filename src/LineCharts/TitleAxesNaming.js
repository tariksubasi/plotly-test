import React from "react";
import Plot from "react-plotly.js";
const TitleAxesNaming = () => {
  var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: "markers",
    name: "Scatter",
  };

  var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: "lines",
    name: "Lines",
  };

  var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: "lines+markers",
    name: "Scatter and Lines",
  };

  var data = [trace1, trace2, trace3];

  var layout = {
    title: "Title & Axis Naming",
    width: 350,
    height: 300,
    xaxis: {
      title: "x-axis title",
    },
    yaxis: {
      title: "y-axis title",
    },
  };
  return (
    <div className="cool-shadow-plot" style={{ display: "inline-block" }}>
      <Plot
        data={data}
        layout={layout}
      />
    </div>
  );
};
export default TitleAxesNaming;
