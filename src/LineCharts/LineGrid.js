import React from "react";
import ChartHolder from "../Components/ChartHolder";
import BasicLine from "../LineCharts/BasicLine";
import LineScatter from "../ScatterPlots/LineScatter";
import NamedLineScatter from "../LineCharts/NamedLineScatter";
import StyledLineScatter from "../LineCharts/StyledLineScatter";
import StyledLine from "../LineCharts/StyledLine";
import LineOptions from "../LineCharts/LineOptions";
import TitleAxesNaming from "../LineCharts/TitleAxesNaming";
import LineDash from "../LineCharts/LineDash";
import ConnectGapsBetweenData from "../LineCharts/ConnectGapsBetweenData"
const LineGrid = () => {
  return (
    <div>
      <ChartHolder title="Linez">
        <BasicLine />
        <LineScatter />
        <NamedLineScatter />
        <StyledLineScatter />
        <StyledLine />
        <LineOptions />
        <TitleAxesNaming />
        <LineDash />
        <ConnectGapsBetweenData />
      </ChartHolder>
    </div>
  );
};
export default LineGrid;
