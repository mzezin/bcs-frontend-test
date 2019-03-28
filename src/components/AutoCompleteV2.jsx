import React from 'react';
import Select, { createFilter } from 'react-select';
import { FixedSizeList as List } from 'react-window';


const listRef = React.createRef();
const height = 35;
const filterConfig = {
  matchFrom: 'start',
};
const MenuList = ({
  options, children, maxHeight, getValue,
}) => {
  const [value] = getValue();
  const initialOffset = options.indexOf(value) * height;

  return (
    <List
      ref={listRef}
      height={maxHeight}
      itemCount={children.length + 1}
      itemSize={height}
      initialScrollOffset={initialOffset}
    >
      {({ index, style }) => {
        if (!style.height) style.height = 0;
        console.log(style)
        return (
          <div style={style}>{children[index]}</div>);
      }}
    </List>
  );
};

const Autocomplete = props => (
  <Select
    {...props}
    noOptionsMessage={({inputValue}) => inputValue}
    escapeClearsValue
    onInputChange={() => {
      console.log('foo');
      if (listRef.current) listRef.current.scrollToItem(0);
    }
    }
    components={{ MenuList }}
    filterOption={createFilter(filterConfig)}

  />
);

export default Autocomplete;
