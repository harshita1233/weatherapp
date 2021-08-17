import React from "react";

import MqLineChart from "./MqLineChart";
export default class Charts extends React.Component {
  constructor() {
    super();
    this.state = {
      config: null,
      AreaChartData: [
        {
          name: "100,001 and Over",
          data: [90, 90, 90, 90, 90, 90, 90],
          color: "#64b2cd",
          lineColor: "#64b2cd",
        },
        {
          name: "10,001 to 100,000",
          data: [56, 56, 56, 56, 56, 56, 56],
          color: "#AAB9DF",
          lineColor: "#AAB9DF",
        },
        {
          name: "5,001 to 10,000",
          data: [23, 23, 23, 23, 23, 23, 23],
          color: "#5edfff",
          lineColor: "#5edfff",
        },
        {
          name: "1,001 to 5,000",
          data: [339, 339, 339, 339, 339, 339, 339],
          color: "#27496d",
          lineColor: "#27496d",
        },
        {
          name: "1 to 1,000",
          data: [802, 802, 802, 802, 802, 802, 802],
          color: "#64c4ed",
          lineColor: "#64c4ed",
        },

        {
          name: " Line 1",
          data: [602, 602, 602, 602, 602, 602, 602],
          color: "#CFDBF2",
          lineColor: "#CFDBF2",
        },
      ],
      category: [
        "Jul16",
        "Oct 16",
        "Jan 17",
        "May 17",
        "Jul 17",
        "Oct 17",
        "Jul 18",
        "Apr 18",
        "Jul 18",
        "Aug 20",
        "Sep 25",
        "Jan21",
        "Jul16",
        "Oct 16",
        "Jan 17",
        "May 17",
        "Jul 17",
        "Oct 17",
        "Jul 18",
        "rrf",
        "tre",
        "Aug 20",
        "Sep 25",
        "Jan21",
      ],
      yAxis: [0, 25, 50, 75, 100],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        {/* <MqLineChart
					
				/> */}
        <MqLineChart
          config={{
            series: this.state.AreaChartData,
          }}
          xAxisLabel={this.state.category}
          yAxis={this.state.yAxis}
        />
      </div>
    );
  }
}
