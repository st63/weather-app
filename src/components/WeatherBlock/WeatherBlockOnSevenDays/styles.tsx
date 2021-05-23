import styled from 'styled-components'

export const WeatherContentWrapper = styled.div`
  display: flex;

  @media ${'(max-width: 705px)'} {
    overflow-y: hidden;
  }
`

export const ArrowControlLeft = styled.button`
  position: relative;
  top: 21px;
  left: -33px;
  border: none;
  outline: none;
  opacity: 0.6;

  @media ${'(max-width: 705px)'} {
    display: none;
  }

  &:hover {
      cursor: pointer;
      opacity: 1;
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    border-right: solid 2px #8083A4;
    border-top: solid 2px #8083A4;
    width: 10px;
    height: 10px;
    transform: translate(12px, 0px) rotate(-135deg);
  }
`

export const ArrowControlRight = styled.button`
  position: relative;
  top: 21px;
  right: 1px;
  border: none;
  outline: none;
  opacity: 0.6;

  @media ${'(max-width: 705px)'} {
    display: none;
  }

  &:hover {
      cursor: pointer;
      opacity: 1;
  }
  
  &:after {
    content: '';
    position: absolute;
    display: block;
    border-right: solid 2px #8083A4;
    border-top: solid 2px #8083A4;
    width: 10px;
    height: 10px;
    transform: translate(8px, 0px) rotate(45deg);
  }
`
