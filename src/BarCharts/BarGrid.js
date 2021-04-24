import React from "react";
import ChartHolder from "../Components/ChartHolder";
import BasicBarChart from "./BasicBar";
import GroupedBarChart from "./GroupedBar";
import StackedBarChart from "./StackedBar";
import BarHoverText from "./BarHoverText";
import BarDirectLabels from "./BarDirectLabels";
import GroupedBarDirectLabels from "./GroupedBarDirectLabels";
import BarRotatedLabels from "./BarRotatedLabels";
import CustomIndividualBarColor from "./CustomIndividualBarColor";
import ColoredStyledBar from "./ColoredStyledBar";
const BarGrid = () => {
  return (
    <div>
      <ChartHolder title="Barz">
        <BasicBarChart />
        <GroupedBarChart />
        <StackedBarChart />
        <BarHoverText />
        <BarDirectLabels />
        <GroupedBarDirectLabels />
        <BarRotatedLabels />
        <CustomIndividualBarColor />
        <ColoredStyledBar />
      </ChartHolder>
    </div>
  );
};
export default BarGrid;
