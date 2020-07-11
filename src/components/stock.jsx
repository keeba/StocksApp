import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";

class Stock extends Component {
  render() {
    const stock = this.props.stock;
    return (
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <h3 style={{ marginLeft: "5px" }}>{stock.Name}</h3>
        </Grid>
        <Grid item xs={3}>
          Quantity {stock.Quantity}
          <br />
          Avg. Cost {stock.AvgCost}
          <br />
          Invested Amt {stock.InvestedAmount}
        </Grid>
        <Grid item xs={3}>
          <strong>Market Value </strong>
          {this.getMarketValue()}
          <br />% of portfolio value {stock.PercentPortfolio}
          <Slider
            value={stock.PercentPortfolio}
            aria-labelledby='continuous-slider'
          />
        </Grid>
        <Grid item xs={3}>
          <strong>Unrealized P/L </strong>
          {stock.UnrealizedPL}
          <br />% Return {stock.PercentReturn}
          <Slider
            value={stock.PercentReturn}
            aria-labelledby='continuous-slider'
          />
        </Grid>
        <Grid item xs={1}>
          <Button variant='contained' color='secondary'>
            BUY
          </Button>
          <br />
          <Button variant='contained' color='primary'>
            SELL
          </Button>
        </Grid>
      </Grid>
    );
  }
  getMarketValue = () => {
    return (
      parseInt(this.props.stock.InvestedAmount) +
      parseInt(this.props.stock.UnrealizedPL)
    );
  };
}

export default Stock;
