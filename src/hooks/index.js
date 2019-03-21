import { useState, useEffect } from 'react';
import { get } from 'axios';

const STOCK_LIST_URL = 'https://api.iextrading.com/1.0/ref-data/symbols?filter=symbol,name';

export const useGetStockList = () => {
  const [stockList, setStockList] = useState([]);
  const [loading, setLoading] = useState(true);
  const getStockList = async () => {
    const { data } = await get(STOCK_LIST_URL);
    console.log('Symbols list length: ', data.length);
    setStockList(data.map(e => ({
      value: e.symbol,
      // label: e.symbol,
      label: `${e.symbol} - ${e.name}`,
    })));
    setLoading(false);
  };
  useEffect(() => {
    getStockList();
  }, []);
  return [stockList, loading];
};

export const dummy = null;
