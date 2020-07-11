export const FETCH_STOCKS_PENDING = "FETCH_STOCKS_PENDING";
export const FETCH_STOCKS_SUCCESS = "FETCH_STOCKS_SUCCESS";
export const FETCH_STOCKS_ERROR = "FETCH_STOCKS_ERROR";

export function fetchStocksPending() {
  return {
    type: FETCH_STOCKS_PENDING,
  };
}

export function fetchStocksSuccess(stocks) {
  return {
    type: FETCH_STOCKS_SUCCESS,
    stocks: stocks,
  };
}

export function fetchStocksError(error) {
  return {
    type: FETCH_STOCKS_ERROR,
    error: error,
  };
}
