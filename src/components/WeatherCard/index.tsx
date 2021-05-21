import React, { FC } from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import 'moment/locale/ru'
import { WeatherCardInner, Date, Degrees, Icon } from './styles'
import { IWeatherToDisplay } from '../../types'

export const WeatherCard: FC<IWeatherToDisplay> = ({ date, temp, icon }) => {
  return (
    <WeatherCardInner>
      <Date><Moment unix format="D MMM YYYY" locale="ru">{date}</Moment></Date>
      <Degrees>{temp}°C</Degrees>
      <Icon src={`http://openweathermap.org/img/wn/${icon}.png`} />
    </WeatherCardInner>
  )
}
