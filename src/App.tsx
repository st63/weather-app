import React, { FC } from 'react'
import { MainPage } from './pages/MainPage'
import { Container, AppBody } from './styles'

const App: FC = () => {
  return (
    <AppBody>
      <Container>
        <MainPage />
      </Container>
    </AppBody>
  )
}

export default App
