import React from 'react';
import Select, { createFilter } from 'react-select';
import { FixedSizeList as List } from 'react-window';

const height = 35;

const filterConfig = {
  ignoreCase: true,
  ignoreAccents: true,
  trim: true,
  matchFrom: 'start',
};

const MenuList = (props) => {
  const {
    options, children, maxHeight, getValue,
  } = props;
  const [value] = getValue();
  const initialOffset = options.indexOf(value) * height;
  return (
    <List
      height={maxHeight}
      itemCount={children.length}
      itemSize={height}
      initialScrollOffset={initialOffset}
    >
      {({ index, style }) => <div style={style}>{children[index]}</div>}
    </List>
  );
};
//


const StockAutoComplete = props => (
  <Select
    {...props}
    components={{ MenuList }}
    filterOption={createFilter(filterConfig)}
  />
);

export default StockAutoComplete;
