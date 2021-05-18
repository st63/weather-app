import styled from "styled-components";


export const WrapForModule = styled.div`
  width: 48%;
  @media ${props => props.theme.media.largeDesktops} {
    width: 100%;
    margin-bottom: 95px;
  }
`

export const Title = styled.h1`
  margin-bottom: 40px;
`

export const CityIsNotSelectedMessage = styled.div`
  text-align: center;
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${props => props.theme.media.largeDesktops} {
    width: 65%;
    margin: 0 auto;
  }
  @media ${props => props.theme.media.mediumDesktops} {
    width: 85%;
  }
  @media ${props => props.theme.media.smallDesctops} {
    width: 100%;
  }
`