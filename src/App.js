import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, useMediaQuery, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Portfolio, Test } from './page';
import { Header, Footer } from './components';
import { PortfolioContextProvider } from './contexts';

function App() {
  // const isPC = useMediaQuery(useTheme().breakpoints.up('pc'));

  return (
    <div>
      <CssBaseline>
        <PortfolioContextProvider>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={(<Portfolio />)} />
            </Routes>
            <Routes>
              <Route path="/test" element={(<Test />)} />
            </Routes>
          </div>
          <Footer />
        </PortfolioContextProvider>
      </CssBaseline>
    </div>
  );
}

export default App;
