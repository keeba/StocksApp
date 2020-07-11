import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import fetchStocks from "./fetchStocks";
import stocksReducer from "./reducers";
import "./index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

function mapStateToProps(state) {
  return {
    stocks: state.stocks,
  };
}

let Container = connect(mapStateToProps, { fetchStocks })(App);

const store = createStore(stocksReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
