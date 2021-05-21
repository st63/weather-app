import styled from 'styled-components'

export const WeatherCardInner = styled.div`
  background-color: rgba(204,204,204,0.2);
  border-radius: .5em;
  width: 127px;
  margin: 0 auto;
  padding: 10px 14px 0px 14px;
  text-align: center;
  @media ${'(max-width: 1470px)'} {
    width: 180px;
  }
`

export const Date = styled.div`
  margin: 15px 0px;
`

export const Degrees = styled.div`
  margin: 15px 4px 0px 0px;
  font-size: 40px;
`

export const Icon = styled.img`
  margin-top: 12px;
`
