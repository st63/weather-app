import styled from 'styled-components'
import backgroundBottom from './images/background-bottom.png'
import backgroundTop from './images/background-top.png'

export const AppBody = styled.div`
  background-color: #373AF5;
  background-image: url(${backgroundBottom}), url(${backgroundTop});
  background-position: 0% 100%,100% 0%;
`

export const Container = styled.div`
  margin: 0 auto;
  padding-top: 84px;
  max-width: 1440px;
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`
