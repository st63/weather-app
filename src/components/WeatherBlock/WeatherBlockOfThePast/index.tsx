import { FC } from 'react'

import { DateInput } from '../../Input'
import { CitySelect } from '../../CitySelect'
import { WeatherCard } from '../../WeatherCard'
import { WeatherBlock, WeatherTitle, EmptyWeatherBlock, EmptyWeatherIcon, EmptyWeatherPlaceholder } from '../styles'
import { WeatherSelectBlock } from './styles'
import placeholderIcon from '../../../images/placeholder-icon.svg'
import { formatDateDisplay } from '../../../utils'

import { useWeatherByDate } from './hooks'

export const WeatherBlockOfThePast: FC = () => {
  const { city, selectCity, date, selectDate, weather } = useWeatherByDate()
  const formatDate: string | undefined = formatDateDisplay(date)

  return (
    <WeatherBlock>
      <WeatherTitle>Forecast for a Date in the Past</WeatherTitle>
      <WeatherSelectBlock>
        <CitySelect city={city} selectCity={selectCity} />
        <DateInput date={date} selectDate={selectDate} />
      </WeatherSelectBlock>
      {weather
        ? (
          <WeatherCard
            date={formatDate}
            weather={weather}
            heightIcon="146px"
            width="98.5%"
          />
          )
        : (
          <EmptyWeatherBlock>
            <EmptyWeatherIcon src={placeholderIcon} />
            <EmptyWeatherPlaceholder>Fill in all the fields and the weather will be displayed</EmptyWeatherPlaceholder>
          </EmptyWeatherBlock>
          )
      }
    </WeatherBlock>
  )
}
