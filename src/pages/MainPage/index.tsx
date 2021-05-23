import React from 'react'
import styled from 'styled-components'

import { WeatherBlockOnSevenDays } from '../../components/WeatherBlock/WeatherBlockOnSevenDays'
import { WeatherBlockOfThePast } from '../../components/WeatherBlock/WeatherBlockOfThePast'
import { PageContainer, PageTitle, PageTitleWord, PageFooter } from '../styles'

const WeathersBlocks = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${'(max-width: 1470px)'} {
    flex-direction: column;
    align-items: center;
  }
`

export const MainPage = () => (
  <PageContainer>
    <PageTitle>
      <PageTitleWord lineHeight="83px" textAlign="left">Weather</PageTitleWord>
      <PageTitleWord lineHeight="97px" textAlign="right">forecast</PageTitleWord>
    </PageTitle>
    <WeathersBlocks>
      <WeatherBlockOnSevenDays />
      <WeatherBlockOfThePast />
    </WeathersBlocks>
    <PageFooter>C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</PageFooter>
  </PageContainer>
)
