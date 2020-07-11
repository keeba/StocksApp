import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  PieSeries,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";

class Portfolio extends Component {
  render() {
    const data = this.getDataPoints();
    return (
      <Paper>
        <Chart data={data}>
          <PieSeries
            valueField='value'
            argumentField='type'
            innerRadius={0.8}
          />
          <Legend position='bottom' />
          <Animation />
        </Chart>
      </Paper>
    );
  }

  getDataPoints = () => {
    if (this.props.stocks) {
      const hCategories = {};
      this.props.stocks.forEach((stock) => {
        if (hCategories[stock.Type]) {
          hCategories[stock.Type] += parseInt(stock.InvestedAmount);
        } else {
          hCategories[stock.Type] = parseInt(stock.InvestedAmount);
        }
      });
      if (hCategories) {
        const data = [];
        Object.keys(hCategories).forEach((type) => {
          data.push({ type: type, value: hCategories[type] });
        });
        return data;
      }
    }
    return [];
  };
}

export default Portfolio;
