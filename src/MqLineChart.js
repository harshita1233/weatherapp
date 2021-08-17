import React from "react";
import ReactHighcharts from "react-highcharts";
import merge from "deepmerge";
import chartGlobals from "./chartGlobals";

class MqLineChart extends React.Component {
  render() {
    const { config } = this.props;
    const defaultConfig = {
      plotOptions: {
        series: {
          events: {
            mouseOut: function () {
              this.chart.tooltip.hide();
            },
          },
        },
      },
      xAxis: {
        startOnTick: true,
      },
      yAxis: {
        startOnTick: true,
        showFirstLabel: true,
        showLastLabel: false,
        labels: {
          distance: "5%",
          y: 10,
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.x}</span><br/>',
        shared: true,
        useHTML: true,
        padding: 15,
        formatter: function () {
          let index = this.points[0].series.userOptions.data.findIndex(
            (ele) => ele === this.points[0].y
          );
          return (
            this.x +
            "<br>" +
            this.points[0].series.name +
            ": " +
            this.points[0].y +
            "<br>" +
            this.points[1].series.name +
            ": " +
            this.points[1].y +
            "<br>" +
            "Weather Description" +
            ": " +
            this.points[0].series.userOptions.breeze[index]
          );
        },
        style: {
          color: "white !important",
        },
        borderColor: "#1C2A59",
      },
      chart: {
        type: "line",
      },
      title: {
        text: "Showing entry for 7 days",
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 360,
            },
            chartOptions: {
              legend: {
                enabled: false,
              },
            },
          },
        ],
      },
    };
    return (
      <div>
        <ReactHighcharts
          config={merge(merge(chartGlobals, defaultConfig), config)}
        />
      </div>
    );
  }
}

export default MqLineChart;
