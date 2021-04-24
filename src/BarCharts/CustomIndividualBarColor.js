import React from "react";
import Plot from "react-plotly.js";

const CustomIndividualBarColor = () => {
  const trace1 = {
    x: ["Feature A", "Feature B", "Feature C", "Feature D", "Feature E"],
    y: [20, 14, 23, 25, 22],
    marker: {
      color: [
        "rgba(204,204,204,1)",
        "rgba(222,45,38,0.8)",
        "rgba(204,204,204,1)",
        "rgba(204,204,204,1)",
        "rgba(204,204,204,1)",
      ],
    },
    type: "bar",
  };

  const data = [trace1];

  const layout = {
    title: "Custom Individual Bar Color",
    width: 350,
    height: 300,
  };
  return (
    <div className="cool-shadow-plot" style={{ display: "inline-block" }}>
      <Plot data={data} layout={layout} />
    </div>
  );
};

export default CustomIndividualBarColor;
