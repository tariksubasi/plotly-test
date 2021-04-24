import React from "react";
import ChartHolder from "../Components/ChartHolder";
import BasicBubble from "./BasicBubble";
import ColoredBubble from "./ColoredBubble";
import HoverTextBubble from "./HoverTextBubble";
import SizeColorSymbol from "./SizeColorSymbol";
const BubbleGrid = () => {
  return (
    <div>
      <ChartHolder title="Bubblez">
        <BasicBubble />
        <ColoredBubble />
        <HoverTextBubble />
        <SizeColorSymbol />
      </ChartHolder>
    </div>
  );
};
export default BubbleGrid;
