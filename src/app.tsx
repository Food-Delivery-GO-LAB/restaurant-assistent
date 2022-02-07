import React from 'react';
import { QueryClientProvider } from 'react-query';
import queryClient from './configs/react-query.config';
import { GlobalStyle } from './configs/styles.config';
import { Button } from './components/buttons';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <h1>Food Delivery</h1>
      <Button buttonType="primary">Hello</Button>
      <br />
      <Button buttonType="primary" loading>
        Hello
      </Button>
      <br />
      <Button buttonType="secondary">Hello</Button>
      <br />
      <Button disabled>Hello</Button>
      <br />
      <Button buttonType="error">Hello</Button>
      <br />
    </QueryClientProvider>
  );
}

export default App;
