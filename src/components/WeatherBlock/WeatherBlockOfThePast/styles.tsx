import styled from 'styled-components'

export const WeatherSelectBlock = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${'(max-width: 730px)'} {
    flex-direction: column;
  }
`
