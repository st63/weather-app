import styled from "styled-components"

export const ArrowLeft = styled.button`
  width: 30px; 
  height: 30px; 
  background-color: rgba(204,204,204,0.2);
  transition: background-color 0.7s ease;
  margin: auto 0px auto 20px;
  border: none;
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
`

export const ArrowRight = styled.button`
  width: 30px; 
  height: 30px; 
  background-color: rgba(204,204,204,0.2);
  transition: background-color 0.7s ease;
  margin: auto 20px auto 0px;
  border: none;
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
`