import React from "react";
import Plot from "react-plotly.js";
const StyledLinePlot = () => {
  const trace1 = {
    type: "scatter",
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: "lines",
    name: "Red",
    line: {
      color: "rgb(219, 64, 82)",
      width: 3,
    },
  };

  const trace2 = {
    type: "scatter",
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: "lines",
    name: "Blue",
    line: {
      color: "rgb(55, 128, 191)",
      width: 1,
    },
  };

  const data = [trace1, trace2];
  return (
    <div className="cool-shadow-plot" style={{ display: "inline-block" }}>
      <Plot
        data={data}
        layout={{ width: 350, height: 300, title: "Styled Line Plot" }}
      />
    </div>
  );
};
export default StyledLinePlot;
