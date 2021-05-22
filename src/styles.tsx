import styled from 'styled-components'
import backgroundBottom from './images/background-bottom.png'
import backgroundTop from './images/background-top.png'

export const Container = styled.div`
  padding: 84px 43px 16px 43px;
  margin: 0 auto;
  width: 1440px;
  background-color: #373AF5;
  background-image: url(${backgroundBottom}), url(${backgroundTop});
  background-position: 0% 100%,100% 0%;
  background-size: 1440px;
  background-repeat: no-repeat,no-repeat;
  @media ${'(max-width: 1440px)'} {
    width: 1280px;
  }
  @media ${'(max-width: 1280px)'} {
    width: 100%;
    background-size: 1280px;
  }
  @media ${'(max-width: 730px)'} {
    padding: 32px 10px 16px 10px;
    background-size: 730px;
  }
  @media ${'(max-width: 320px)'} {
    background-size: 580px;
  }
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`
