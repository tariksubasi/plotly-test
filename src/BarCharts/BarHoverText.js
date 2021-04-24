import React from "react";
import Plot from "react-plotly.js";

const BarHoverText = () => {
  const trace1 = {
    x: ["Liam", "Sophie", "Jacob", "Mia", "William", "Olivia"],
    y: [8.0, 8.0, 12.0, 12.0, 13.0, 20.0],
    type: "bar",
    text: [
      "4.17 below the mean",
      "4.17 below the mean",
      "0.17 below the mean",
      "0.17 below the mean",
      "0.83 above the mean",
      "7.83 above the mean",
    ],
    marker: {
      color: "rgb(142,124,195)",
    },
  };
  const data = [trace1];
  const layout = {
    width: 350,
    height: 300,
    title: "Bar Hover Text",
    font: {
      family: "Raleway, sans-serif",
    },
    showlegend: false,
    xaxis: {
      tickangle: -45,
    },
    yaxis: {
      zeroline: false,
      gridwidth: 2,
    },
    bargap: 0.05,
  };
  return (
    <div className="cool-shadow-plot" style={{ display: "inline-block" }}>
      <Plot data={data} layout={layout} />
    </div>
  );
};

export default BarHoverText;
