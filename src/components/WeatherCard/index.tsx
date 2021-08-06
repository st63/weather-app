import { FC } from 'react'
import { WeatherCardInner, Date, Degrees, Icon } from './styles'

export const WeatherCard: FC<IWeatherCard> = ({ date, weather, width, heightIcon }) => {
  const sign: string = (weather.temp > 0) ? '+' : ''

  return (
    <WeatherCardInner width={width}>
      <Date>{date}</Date>
      <Icon heightIcon={heightIcon} src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`} />
      <Degrees>{sign}{weather.temp}°</Degrees>
    </WeatherCardInner>
  )
}
