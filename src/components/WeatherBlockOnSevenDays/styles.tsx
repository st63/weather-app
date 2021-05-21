import styled from 'styled-components'

export const WeatherContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${'(max-width: 1470px)'} {
    width: 65%;
    margin: 0 auto;
  }
  @media ${'(max-width: 1199px)'} {
    width: 85%;
  }
  @media ${'(max-width: 991px)'} {
    width: 100%;
  }
`

export const ArrowControlLeft = styled.button`
  width: 30px; 
  height: 30px; 
  background-color: rgba(204,204,204,0.2);
  transition: background-color 0.7s ease;
  margin: auto 0px;
  border: none;
  outline: none;
  border-radius: 3px;
  &:after {
    content: '';
    display: block;
    border-right: solid #fff;
    border-top: solid #fff;
    width: 7px; 
    height: 7px;
    transform: translate(12px, 0px) rotate(-135deg);
  }
  &:hover {
      cursor: pointer;
      background-color: rgba(204,204,204,0.5);
  }
  @media ${'(max-width: 576px)'} {
    margin: auto;
  }
`

export const ArrowControlRight = styled.button`
  width: 30px; 
  height: 30px; 
  background-color: rgba(204,204,204,0.2);
  transition: background-color 0.7s ease;
  margin: auto 0px;
  border: none;
  outline: none;
  border-radius: 3px;
  &:after {
    content: '';
    display: block;
    border-right: solid #fff;
    border-top: solid #fff;
    width: 7px; 
    height: 7px;
    transform: translate(8px, 0px) rotate(45deg);
  }
  &:hover {
      cursor: pointer;
      background-color: rgba(204,204,204,0.5);
  }
  @media ${'(max-width: 576px)'} {
    margin: auto;
  }
`
