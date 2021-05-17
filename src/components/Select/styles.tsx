import styled from 'styled-components';

export const StyledSelect = styled.select`
  display: block;
  font-size: 16px;
  font-weight: 700;
  padding: .6em 1.4em .5em .8em;
  width: 48%;
  max-width: 100%;
  border: 1px solid #aaa;
  border-radius: .5em;
  outline: none;
  margin-bottom: 200px;
  background-color: rgba(204,204,204,0.2);
  transition: background-color 0.7s ease;
  &:hover {
    cursor: pointer;
    background-color: rgba(204,204,204,0.5);
  }
`

export const Option = styled.option`
  background-color: #906ca7;
`