import {
  fetchStocksPending,
  fetchStocksSuccess,
  fetchStocksError,
} from "./actions";

export default function fetchStocks() {
  return (dispatch) => {
    dispatch(fetchStocksPending());
    fetch("http://localhost:8081/listStocks", { mode: "cors" })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchStocksSuccess(res));
        //return res;
      })
      .catch((error) => {
        dispatch(fetchStocksError(error));
      });
  };
}
