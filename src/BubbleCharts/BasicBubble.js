import React from "react";
import Plot from "react-plotly.js";
const BasicBubble = () => {
    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 11, 12, 13],
        mode: 'markers',
        marker: {
          size: [40, 60, 80, 100]
        }
      };
      
      var data = [trace1];
      
      var layout = {
        title: 'Marker Size',
        showlegend: false,
        height: 400,
        width: 400
      };

  return (
    <div className="cool-shadow-plot" style={{ display: "inline-block" }}>
      <Plot data={data} layout={layout} />
    </div>
  );
};
export default BasicBubble;
