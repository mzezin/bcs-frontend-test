import * as TYPE from '../actions/constants';

const reducer = (state = { watchList: [], watchListData: {} }, action) => {
  switch (action.type) {
    case TYPE.FETCH_SYMBOLS:
      return { ...state, symbolsLoading: true };
    case TYPE.SET_SYMBOLS:
      return { ...state, symbolsLoading: false, symbols: action.data };
    case TYPE.ADD_WATCHLIST_ITEM:
      return state.watchList.indexOf(action.symbol) !== -1
        ? state
        : { ...state, watchList: [...state.watchList, action.symbol] };
    case TYPE.DELETE_WATCHLIST_ITEM:
      return { ...state, watchList: [...state.watchList.filter(e => e !== action.symbol)] };
    case TYPE.FETCH_WATCHLIST_DATA:
      return { ...state, watchListDataLoading: true };

    case TYPE.SET_WATCHLIST_DATA:
      return { ...state, watchListData: action.data, watchListDataLoading: false };
    default:
      return state;
  }
};
export default reducer;
