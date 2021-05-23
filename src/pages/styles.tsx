import styled from 'styled-components'

export const PageContainer = styled.div``

export const PageTitle = styled.header`
  width: 775px;
  margin: 0 auto 72px auto;

  @media ${'(max-width: 880px)'} {
    width: 100%;
  }

  @media ${'(max-width: 730px)'} {
    width: 245px;
    margin-bottom: 24px;
  }
`

export const PageTitleWord = styled.h1 < { lineHeight: string, textAlign: string } > `
  font-weight: bold;
  font-size: 102px;
  line-height: ${props => props.lineHeight};
  text-align: ${props => props.textAlign};

  @media ${'(max-width: 730px)'} {
    font-size: 32px;
    line-height: 32px;
  }
`

export const PageFooter = styled.footer`
  color: #fff;
  margin-top: 199px;
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  opacity: 0.6;
  
  @media ${'(max-width: 1470px)'} {
    margin-top: 12px;
  }
`
