import React from "react";
import Plot from "react-plotly.js";

const BasicBar = () => {
    const data = [
        {
          x: ['giraffes', 'orangutans', 'monkeys'],
          y: [20, 14, 23],
          type: 'bar'
        }
      ];
  return (
    <div className="cool-shadow-plot" style={{ display: "inline-block" }}>
      <Plot
        data={data}
        layout={{ width: 350, height: 300, title: "Basic Bar " }}
      />
    </div>
  );
};

export default BasicBar;
