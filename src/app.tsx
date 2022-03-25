import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { SnackbarProvider } from 'notistack';
import queryClient from './configs/react-query.config';
import { GlobalStyle } from './configs/styles.config';
import AppPages from './routes';
import AppProvider from './state/store';

function App() {
  return (
    <AppProvider>
      <SnackbarProvider autoHideDuration={4000}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <BrowserRouter>
            <AppPages />
          </BrowserRouter>
        </QueryClientProvider>
      </SnackbarProvider>
    </AppProvider>
  );
}

export default App;
