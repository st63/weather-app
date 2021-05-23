import styled from 'styled-components'

export const WeatherCardInner = styled.div < { width: string } > `
  background-color: #373AF5;
  border-radius: 6px;
  width: ${({ width }) => width};
  height: 237px;
  padding: 20px 21px 24px 19px;
  margin: 55px 5px 0px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${'(max-width: 730px)'} {
    margin-top: 30px;
  }
  
  @media ${'(max-width: 359px)'} {
    border: 2px solid #2C2D76;
    margin-right: 16px;
  }
`

export const Date = styled.div`
  font-weight: 700;
  text-transform: lowercase;
`

export const Icon = styled.img < { heightIcon: string } > `
  height: ${({ heightIcon }) => heightIcon};
  align-self: center;
`

export const Degrees = styled.div`
  font-size: 32px;
  font-weight: 700;
  align-self: flex-end;
`
