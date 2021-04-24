import React from "react";
import Plot from "react-plotly.js";
const BasicLine = () => {
    var data = [
        {
          x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
          y: [1, 3, 6],
          type: 'scatter'
        }
      ];
  return (
    <div className="cool-shadow-plot" style={{ display: "inline-block" }}>
      <Plot
        data={data}
        layout={{ width: 350, height: 300, title: "Basic Time Series Chart" }}
      />
    </div>
  );
};
export default BasicLine;
