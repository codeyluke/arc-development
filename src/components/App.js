import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from './ui/Theme';
import Header from '../components/ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <h1>hello</h1>
    </ThemeProvider>
  );
}

export default App;
