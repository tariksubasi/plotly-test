import React from "react";
import ChartHolder from "../Components/ChartHolder";
import BasicPie from "../PieCharts/BasicPie";
import LabelPercent from "../PieCharts/LabelPercent";
const PieGrid = () => {
  return (
    <div>
      <ChartHolder title="Pie">
        <BasicPie />
        <LabelPercent />
      </ChartHolder>
    </div>
  );
};
export default PieGrid;
