import React from 'react';
import { QueryClientProvider } from 'react-query';
import queryClient from './configs/react-query.config';
import { GlobalStyle } from './configs/styles.config';
import AddingRestaurant from './pages/app/add-restaurant/adding-restaurant';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <AddingRestaurant />
    </QueryClientProvider>
  );
}

export default App;
