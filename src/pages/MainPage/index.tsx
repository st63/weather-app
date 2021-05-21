import React from 'react'
import WeatherBlockOnSevenDays from '../../components/WeatherBlockOnSevenDays'
import WeatherBlockOfThePast from '../../components/WeatherBlockOfThePast'
import { PageContainer } from './styles'

export const MainPage = () => {
  return (
    <PageContainer>
      <WeatherBlockOnSevenDays />
      <WeatherBlockOfThePast />
    </PageContainer>
  )
}
