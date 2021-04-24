import React from "react";
import LineScatter from "./LineScatter";
import DataLabelHover from "./DataLabelHover";
import DataLabelPlot from "./DataLabelPlot";
import ScatterColorDimension from "./ScatterColorDimension";
import ColoredStyledScatter from "./ColoredStyledScatter";
import ChartHolder from "../Components/ChartHolder";

const ScatterGrid = () => {
  return (
    <div>
      <ChartHolder title="Scatterz">
        <LineScatter />
        <DataLabelHover />
        <DataLabelPlot />
        <ScatterColorDimension />
        <ColoredStyledScatter />
      </ChartHolder>
    </div>
  );
};
export default ScatterGrid;
