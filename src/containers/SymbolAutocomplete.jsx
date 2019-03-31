import React, { useEffect, createRef } from 'react';
import { connect } from 'react-redux';

import Select, { createFilter } from 'react-select';
import { FixedSizeList as List } from 'react-window';

import { fetchSymbols, addToWatchList } from '../actions';

// =====start of react-select performance magic =========

const filterConfig = {
  matchFrom: 'start',
};

const listRef = createRef();
const height = 35;

const MenuList = (props) => {
  const { options, getValue, children: initialChildren } = props;
  const [value] = getValue();

  const initialOffset = options.indexOf(value) * height;

  const children = React.Children.toArray(initialChildren);


  const totalHeight = (options.length + 1) * height;

  const estimatedItemSize = totalHeight / options.length;

  return (
    <List
      ref={listRef}
      height={Math.min(children.length * height, 300)}
      itemCount={children.length}
      itemSize={height}
      estimatedItemSize={estimatedItemSize}
      initialScrollOffset={initialOffset}
    >
      {({ index, style }) => <div style={style}>{children[index]}</div>}
    </List>
  );
};

// =====end of react-select performance magic =========

const SymbolAutocomplete = (props) => {
  const {
    loading, options = [], fetchSymbols: fetchOptions, addToWatchList: addToWatchListProp,
  } = props;
  useEffect(() => {
    fetchOptions();
  }, []);

  return (
    <Select
      isLoading={loading}
      options={options}
      onChange={({ value }) => addToWatchListProp(value)}
      components={{ MenuList }}
      onInputChange={() => {
        if (listRef.current) listRef.current.scrollToItem(0);
      }
      }
      filterOption={createFilter(filterConfig)}
    />
  );
};

const mapStateToProps = state => ({
  loading: state.symbolsLoading,
  options: state.symbols,

});

const mapDispatchToProps = {
  fetchSymbols,
  addToWatchList,
};

export default connect(mapStateToProps, mapDispatchToProps)(SymbolAutocomplete);
