import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

import StockAutoComplete from './StockAutoComplete';
import StockAutoCompleteV2 from './AutoCompleteV2';
import StockTable from './StockTable';


const dummy = {
  name: 'American Airlines Group Inc.',
  symbol: 'AAL',
  bid: 666,
  ask: 66,
};

const StockListPage = ({
  stockList,
  stockListLoading,
  myList,
  deleteRow,
  addRow,
  newSymbol,
}) => (
  // <div style={{ padding: '20px' }}>
  //   <Grid container spacing={24}>
  //     <Grid item xs={9}>
  //       <Paper>
  //         <StockTable data={myList} deleteRow={deleteRow} addRow={addRow} />
  //       </Paper>
  //     </Grid>
  //     <Grid item xs={3}>
  //       <Paper>
  //         <Fab onClick={() => addRow(dummy)}>Add</Fab>
  //       </Paper>
  //     </Grid>
  //     <Grid item xs={12}>
  //       <Paper>
  //         <ReactPlaceholder type="media" rows={7} ready={!stockListLoading}>
  //           <StockAutoCompleteV2 options={stockList} />
  //         </ReactPlaceholder>
  //       </Paper>
  //     </Grid>
  //   </Grid>
  // </div>
  <StockAutoCompleteV2
    options={stockList}
    isLoading={stockListLoading}
  />
);

export default StockListPage;
