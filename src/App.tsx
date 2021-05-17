import React from 'react';
import { MainPage } from './pages/MainPage';
import { Container } from './styles';
import { Background } from './styles';
import * as types from 'styled-components/cssprop';

function App() {
  return (
    <Background>
      <Container>
        <MainPage />
      </Container>
    </Background>
  );
}

export default App;
