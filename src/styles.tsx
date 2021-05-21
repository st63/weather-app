import styled from 'styled-components'
import background from './images/background.jpg'

export const Container = styled.div`
  padding: 40px 15px;
  height: 100vh;
  margin: 0 auto;
  width: 1140px;
  @media ${'(max-width: 1200px)'} {
    width: 960px;
  }
  @media ${'(max-width: 992px)'} {
    width: 720px;
  }
  @media ${'(max-width: 768px)'} {
    width: 540px;
  }
  @media ${'(max-width: 576px)'} {
    width: auto;
  }
`

export const Background = styled.div`
  background: url(${background}),rgba(255,255,255,0.3);
  background-blend-mode: color;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`
