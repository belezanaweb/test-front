import React from 'react';
import Router from './routes/Routes';
import { Container } from './App.styled';


const App = (): JSX.Element => {
  return (
    <Container>
      <Router />
    </Container>
  );
}

export default App;
