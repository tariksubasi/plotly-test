import React from "react";
import Plot from "react-plotly.js";
const HoverTextBubble = () => {
    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 11, 12, 13],
        text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
        mode: 'markers',
        marker: {
          color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
          size: [40, 60, 80, 100]
        }
      };
      var data = [trace1];
      var layout = {
        title: 'Bubble Chart Hover Text',
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
export default HoverTextBubble;
