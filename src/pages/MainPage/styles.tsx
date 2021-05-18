import styled from 'styled-components';

export const Border = styled.div`
  border-left: 1px solid #fff;
  opacity: 0.3;
  position: relative;
  top: 152px;
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${props => props.theme.media.largeDesktops} {
    flex-direction: column;
  }
`