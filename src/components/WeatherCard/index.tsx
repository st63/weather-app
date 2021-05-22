import React, { FC } from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import { WeatherCardInner, Date, Degrees, Icon } from './styles'
import { IWeatherCard } from '../../types'

export const WeatherCard: FC<IWeatherCard> = ({ date, temp, icon, width, heightIcon }) => {
  const sign: string = (temp > 0) ? '+' : ''

  return (
    <WeatherCardInner width={width}>
      <Date><Moment unix format="D MMM YYYY">{date}</Moment></Date>
      <Icon heightIcon={heightIcon} src={`http://openweathermap.org/img/wn/${icon}.png`} />
      <Degrees>{sign}{temp}°</Degrees>
    </WeatherCardInner>
  )
}
