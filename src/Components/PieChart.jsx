import React, { memo } from "react";
import Chart from "react-apexcharts";
function PieChart({ PA, I }) {
  return (
    <Chart
      width={450}
      height={450}
      series={[Number.parseInt(PA), Number.parseInt(I)]}
      type="pie"
      options={{
        labels: ["Principal Amount", "Intrest"],
      }}
    ></Chart>
  );
}

export default memo(PieChart);
