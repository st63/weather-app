import styled from 'styled-components'

export const WeatherCardInner = styled.div<{ width: string }>`
  background-color: #373AF5;
  border-radius: 6px;
  width: ${({ width }) => width};
  height: 237px;
  padding: 20px 21px 24px 19px;
  margin: 0px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 55px;
  @media ${'(max-width: 730px)'} {
    width: 100%;
    margin: 30px 0px 0px 0px;
  }
`

export const Date = styled.div`
  font-weight: 700;
`

export const Icon = styled.img<{ heightIcon: string }>`
  height: ${({ heightIcon }) => heightIcon};
  align-self: center;
`

export const Degrees = styled.div`
  font-size: 32px;
  font-weight: 700;
  align-self: flex-end;
`
