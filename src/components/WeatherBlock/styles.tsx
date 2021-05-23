import styled from 'styled-components'

export const WeatherBlock = styled.div`
  width: 660px;
  height: 524px;
  padding: 54px 54px;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(4, 5, 73, 0.25), 14px 14px 20px rgba(5, 6, 114, 0.2);
  border-radius: 8px;

  @media ${'(max-width: 1470px)'} {
    margin-bottom: 34px;
  }
  
  @media ${'(max-width: 730px)'} {
    width: 100%;
    padding: 32px 54px 60px 54px;
    height: auto;
  }

  @media ${'(max-width: 359px)'} {
    padding: 32px 24px 60px 24px;
    margin-bottom: 10px;
  }
`

export const WeatherTitle = styled.h1`
  margin-bottom: 36px;
  margin-left: 4px;
  color: #2C2D76;
  font-weight: bold;
  font-size: 32px;

  @media ${'(max-width: 730px)'} {
    margin-left: 0px;
    line-height: 32px;
  }
  
  @media ${'(max-width: 390px)'} {
    margin-left: 0px;
    line-height: 32px;
    font-size: 25px;
  }
`

export const EmptyWeatherBlock = styled.div`
  font-weight: bold;
  text-align: center;
  margin-top: 60px;
`

export const EmptyWeatherIcon = styled.img`
  margin-bottom: 22px;
`

export const EmptyWeatherPlaceholder = styled.p`
  color:#8083A4;
`
