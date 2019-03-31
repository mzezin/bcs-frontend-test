import React from 'react';
import { connect } from 'react-redux';
import {
  Header, Image, Table, Button,
} from 'semantic-ui-react';

import { deleteFromWatchList } from '../actions';

const WatchListTable = ({
  watchList, watchListData, deleteFromWatchList: deleteRow,
}) => {
  const tableData = watchList.map((e) => {
    const {
      companyName, logoUrl, latestPrice, iexBidPrice, iexAskPrice,
    } = watchListData[e] || {};
    return (
      <Table.Row key={e}>
        <Table.Cell>
          <Header as="h4" image>
            <Image src={logoUrl} size="mini" alt="" />
            <Header.Content>
              {e}
              <Header.Subheader>{companyName || '-'}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
          {latestPrice || '-'}
        </Table.Cell>
        <Table.Cell>
          {iexBidPrice || '-'}
        </Table.Cell>
        <Table.Cell>
          {iexAskPrice || '-'}
        </Table.Cell>
        <Table.Cell>
          <Button
            basic
            circular
            size="large"
            icon="trash alternate"
            onClick={() => deleteRow(e)}
          />
        </Table.Cell>
      </Table.Row>
    );
  });
  return (
    <Table celled fixed singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width="6">Symbol</Table.HeaderCell>
          <Table.HeaderCell>Latest</Table.HeaderCell>
          <Table.HeaderCell>Bid</Table.HeaderCell>
          <Table.HeaderCell>Ask</Table.HeaderCell>
          <Table.HeaderCell width="1"></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {tableData}
      </Table.Body>
    </Table>
  );
};

const mapStateToProps = state => ({
  watchList: state.watchList,
  watchListData: state.watchListData,
  watchListDataLoading: state.watchListDataLoading,
});

const mapDispatchToProps = {
  deleteFromWatchList,
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchListTable);
