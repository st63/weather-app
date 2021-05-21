import React, { FC } from 'react'
import { MainPage } from './pages/MainPage'
import { Container, Background } from './styles'

const App: FC = () => {
  return (
    <Background>
      <Container>
        <MainPage />
      </Container>
    </Background>
  )
}

export default App
