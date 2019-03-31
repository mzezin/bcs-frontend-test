import * as TYPE from './constants';

export const fetchSymbols = () => ({
  type: TYPE.FETCH_SYMBOLS,
});

export const addToWatchList = symbol => ({
  type: TYPE.ADD_WATCHLIST_ITEM,
  symbol,
});

export const deleteFromWatchList = symbol => ({
  type: TYPE.DELETE_WATCHLIST_ITEM,
  symbol,
});
