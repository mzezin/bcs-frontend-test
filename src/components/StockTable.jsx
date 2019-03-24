import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const StockTable = ({ data, deleteRow }) => {
  console.log(data);
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Ticker</TableCell>
          <TableCell>Description</TableCell>
          <TableCell align="right">Bid</TableCell>
          <TableCell align="right">Ask </TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.symbol}
            </TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell align="right">{row.bid}</TableCell>
            <TableCell align="right">{row.ask}</TableCell>
            <TableCell padding="checkbox">
              <IconButton aria-label="Delete" disableRipple onClick={() => deleteRow(row.id)}>
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StockTable;
