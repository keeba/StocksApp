import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Stock from "./components/stock";
import Portfolio from "./components/portfolio";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchStocks();
  }

  render() {
    const stocks = this.props.stocks;
    return (
      <React.Fragment>
        <Grid container>
          <Grid item xs={9}>
            {stocks &&
              stocks.map((stock) => <Stock key={stock.Name} stock={stock} />)}
          </Grid>
          <Grid item xs={3}>
            <Portfolio key={"portfolio"} stocks={stocks}></Portfolio>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
