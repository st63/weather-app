import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${'(max-width: 1470px)'} {
    flex-direction: column;
  }
`
