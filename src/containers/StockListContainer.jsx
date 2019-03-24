import React, { useState } from 'react';
import uuid from 'uuid/v4';

import { useGetStockList } from '../hooks';
import StockListPage from '../components/StockListPage';

const rows = [
  {
    name: 'Agilent Technologies Inc.',
    symbol: 'A',
    bid: 11,
    ask: 22,
  },
  {
    name: 'Alcoa Corporation',
    symbol: 'AA',
    bid: 11,
    ask: 22,
  },
  {
    name: 'Perth Mint Physical Gold',
    symbol: 'AAAU',
    bid: 11,
    ask: 22,
  },
  {
    name: 'Altaba Inc.',
    symbol: 'AABA',
    bid: 11,
    ask: 22,
  },
  {
    name: 'AAC Holdings Inc.',
    symbol: 'AAC',
    bid: 11,
    ask: 22,
  },
  {
    name: 'AdvisorShares Dorsey Wright ADR',
    symbol: 'AADR',
    bid: 11,
    ask: 22,
  },
  {
    name: 'American Airlines Group Inc.',
    symbol: 'AAL',
    bid: 11,
    ask: 22,
  },
];


const StockListContainer = () => {
  const [stockList, stockListLoading] = useGetStockList();
  const [myList, setMyList] = useState(rows.map(e => ({ id: uuid(), ...e })));
  const deleteRow = id => setMyList(myList.filter(e => e.id !== id));
  const addRow = (listItem) => {
    const newItem = { ...listItem, id: uuid() };
    console.log(newItem);
    setMyList([...myList, newItem]);
    console.log(myList);
  };
  return (
    <StockListPage
      stockList={stockList}
      stockListLoading={stockListLoading}
      myList={myList}
      deleteRow={deleteRow}
      addRow={addRow}
    />
  );
};

export default StockListContainer;
