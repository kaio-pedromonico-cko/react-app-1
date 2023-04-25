import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valueArray = props.dataPoints.map((x) => x.value);
  const maxValue = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={maxValue}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default Chart;
