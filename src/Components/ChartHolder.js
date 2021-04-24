import React from "react";

const ChartHolder = ({ children, title }) => {
  return (
    <div>
      <h1 class="cool-shadow" style={{ textAlign: "center" }}>
        {title}
      </h1>
      <div style={{ display: "flex", justifyContent: "center", flexWrap : "wrap" }}>
        {children}
      </div>
    </div>
  );
};

export default ChartHolder;
