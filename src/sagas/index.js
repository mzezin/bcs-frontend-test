/* eslint-disable no-restricted-syntax */
import {
  put, takeLatest, all, select, delay, call,
} from 'redux-saga/effects';
import { get } from 'axios';
import * as TYPE from '../actions/constants';


function* fetchSymbols() {
  const { data } = yield get('https://api.iextrading.com/1.0/ref-data/symbols?filter=symbol,name');
  const symbols = data.map(e => ({
    value: e.symbol,
    key: e.symbol,
    label: `${e.symbol} - ${e.name}`,
  }));
  yield put({ type: TYPE.SET_SYMBOLS, data: symbols });
}

function* fetchWatchListData() {
  const watchedSymbols = yield select(({ watchList = [] }) => watchList);
  if (Array.isArray(watchedSymbols) && watchedSymbols.length > 0) {
    const { data } = yield get('https://api.iextrading.com/1.0/stock/market/batch',
      {
        params: {
          symbols: watchedSymbols.join(',').toLowerCase(),
          types: 'quote,logo',
          filter: 'companyName,latestPrice,iexBidPrice,iexAskPrice, url',
        },
      });

    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = {
          companyName: data[key].quote.companyName,
          latestPrice: data[key].quote.latestPrice,
          iexBidPrice: data[key].quote.iexBidPrice,
          iexAskPrice: data[key].quote.iexAskPrice,
          logoUrl: data[key].logo.url,
        };
      }
    }
    yield put({ type: TYPE.SET_WATCHLIST_DATA, data });
  }
}


function* periodicUpdate() {
  while (true) {
    yield call(fetchWatchListData);
    yield delay(20000);
  }
}

function* actionWatcher() {
  yield takeLatest(TYPE.FETCH_SYMBOLS, fetchSymbols);
  yield takeLatest([TYPE.ADD_WATCHLIST_ITEM, TYPE.DELETE_WATCHLIST_ITEM], fetchWatchListData);
}
export default function* rootSaga() {
  yield all([
    actionWatcher(),
    periodicUpdate(),
  ]);
}
