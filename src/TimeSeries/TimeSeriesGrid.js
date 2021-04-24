import React from "react";
import ChartHolder from "../Components/ChartHolder";
import BasicTimeSeries from "./BasicTimeSeries"
const TimeSeriesGrid = () => {
  return (
    <div>
      <ChartHolder title="Time Seriez">
        <BasicTimeSeries />
      </ChartHolder>
    </div>
  );
};
export default TimeSeriesGrid;
