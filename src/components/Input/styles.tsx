import styled from 'styled-components'

export const Input = styled.input`
  width: 48%;
  max-width: 100%;
  height: 41px;
  border: 1px solid #aaa;
  border-radius: .5em;
  outline: none;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  padding: .5em 1.4em .3em 1em;
  border: 1px solid #cecece;
  background-color: rgba(204,204,204,0.2);
  border-radius: .5em;
  transition: background-color 0.7s ease;
  &:hover {
    background-color: rgba(204,204,204,0.5);
  }
  &::placeholder {
    color: #fff;
  }
  &:focus::placeholder {
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  @media ${'(max-width: 480px)'} {
    width: 100%;
    margin-bottom: 55px;
  }
`
