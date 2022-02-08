import React from 'react';
import { QueryClientProvider } from 'react-query';
import queryClient from './configs/react-query.config';
import { GlobalStyle } from './configs/styles.config';
import { Button } from './components/buttons';
import Title from './components/typography/title';
import Text from './components/typography/text';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Title size="md">Restaurant Assistant</Title>
      <Button buttonType="primary">Primary</Button>
      <br />
      <Button buttonType="primary" loading>
        Loading
      </Button>
      <br />
      <Button buttonType="secondary">Secondary</Button>
      <br />
      <Button disabled>Disabled</Button>
      <br />
      <Button buttonType="error">Error</Button>
      <br />

      <Text color="black" size="md">
        Hello world
      </Text>
    </QueryClientProvider>
  );
}

export default App;
