import styled from 'styled-components'

export const Input = styled.input`
  width: 251px;
  max-width: 100%;
  height: 48px;
  margin-right: 5px;
  border: 2px solid rgba(128, 131, 164, 0.2);
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  font-weight: 400;
  color:#8083A4;
  padding: 14px 9px 13px 15px;
  background: rgba(128, 131, 164, 0.06);

  &:hover {
    border: 2px solid #8083A4;
  }

  &:active {
    border: 2px solid #373AF5;
  }
  
  &::placeholder {
    color:#8083A4;
    font-weight: 400;
  }
  
  @media ${'(max-width: 730px)'} {
    width: 100%;
    margin-top: 24px;
  }
`
