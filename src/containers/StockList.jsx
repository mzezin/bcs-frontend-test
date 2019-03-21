import React from 'react';
// import Select from 'react-select';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

import { useGetStockList } from '../hooks';
import StockAutoComplete from '../components/StockAutoComplete';

const StockList = () => {
  const [stockList, loading] = useGetStockList();
  return (
    <div>
      <ReactPlaceholder type="media" rows={7} ready={!loading}>
        <StockAutoComplete options={stockList} />
      </ReactPlaceholder>
    </div>
  );
};

export default StockList;
