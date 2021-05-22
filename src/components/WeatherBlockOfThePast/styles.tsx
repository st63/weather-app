import styled from 'styled-components'

export const WeatherSelectBlock = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${'(max-width: 730px)'} {
    flex-direction: column;
  }
`

export const PlaceholderForInputDate = styled.div<{ isDateSelected: boolean }>`
  position: absolute;
  color: ${({ isDateSelected }) => isDateSelected ? '#2C2D76' : '#8083A4'};
  font-weight: 400;
  background-color: #f8f8fa;
  width: 95px;
  left: 16px;
  top: 12px;
  @media ${'(max-width: 730px)'} {
    top: 36px;
  }
`

export const PlaceholderContentForInputDate = styled.div`
  position: relative;
`
