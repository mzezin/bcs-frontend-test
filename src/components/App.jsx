import React from 'react';
import { Container, Card } from 'semantic-ui-react';

import SymbolAutoComplete from '../containers/SymbolAutocomplete';
import WatchListTable from '../containers/WatchListTable';

const App = () => (
  <Container style={{ padding: '30px' }}>
    <Card fluid>
      <WatchListTable />
    </Card>
    <Card fluid>
      <SymbolAutoComplete />
    </Card>
  </Container>
);
export default App;
