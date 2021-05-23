import styled from 'styled-components'

export const Select = styled.select < { isCitySelected: boolean } > `
  display: block;
  color: ${({ isCitySelected }) => isCitySelected ? '#2C2D76' : '#8083A4'};
  font-size: 16px;
  height: 48px;
  padding: 13px 34px 13px 10px;
  margin-left: 4px;
  width: 251px;
  max-width: 100%;
  border: 2px solid rgba(128, 131, 164, 0.2);
  border-radius: 8px;
  outline: none;
  background: rgba(128, 131, 164, 0.06);
  transition: background-color 0.7s ease;
  position: relative;

  &:hover {
    cursor: pointer;
    border: 2px solid #8083A4;
  }

  &:active {
    border: 2px solid #373AF5;
  }

  @media ${'(max-width: 730px)'} {
    margin-left: 0px;
    width: 100%;
  }
`

export const Option = styled.option`
  color:#2C2D76;
  background-color: #fff;
  border-radius: 5px;
`
