import React from 'react'
import WeatherBlockOnSevenDays from '../../components/WeatherBlockOnSevenDays'
import WeatherBlockOfThePast from '../../components/WeatherBlockOfThePast'
import { PageContainer, PageTitle, PageTitleWord, WeatherBlocksWrapper, PageFooter } from './styles'

export const MainPage = () => {
  return (
    <PageContainer>
      <PageTitle>
        <PageTitleWord lineHeight={'83px'} textAlign={'left'}>Weather</PageTitleWord>
        <PageTitleWord lineHeight={'97px'} textAlign={'right'}>forecast</PageTitleWord>
      </PageTitle>
      <WeatherBlocksWrapper>
        <WeatherBlockOnSevenDays />
        <WeatherBlockOfThePast />
      </WeatherBlocksWrapper>
      <PageFooter>C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</PageFooter>
    </PageContainer>
  )
}
