import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import queryClient from './configs/react-query.config';
import { GlobalStyle } from './configs/styles.config';
import ManagerRoutes from './pages/app';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <ManagerRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
