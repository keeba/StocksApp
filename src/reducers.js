import {
  FETCH_STOCKS_PENDING,
  FETCH_STOCKS_SUCCESS,
  FETCH_STOCKS_ERROR,
} from "./actions";

const initialState = {
  pending: false,
  products: [],
  error: null,
};

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCKS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_STOCKS_SUCCESS:
      return {
        ...state,
        pending: false,
        stocks: action.stocks,
      };
    case FETCH_STOCKS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default stocksReducer;
