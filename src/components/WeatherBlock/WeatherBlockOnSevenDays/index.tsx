import { FC } from 'react'
import { CitySelect } from '../../CitySelect'
import { WeatherCard } from '../../WeatherCard'
import { WeatherBlock, WeatherTitle, EmptyWeatherBlock, EmptyWeatherIcon, EmptyWeatherPlaceholder } from '../styles'
import { WeatherContentWrapper, ArrowControlLeft, ArrowControlRight } from './styles'
import placeholderIcon from '../../../images/placeholder-icon.svg'

import { useWeatherList, usePagination } from './hooks'

const renderWeather = (day: IWeatherToDisplay) => <WeatherCard key={day.date} date={day.date} weather={day} heightIcon="115px" width="174px" />

export const WeatherBlockOnSevenDays: FC = () => {
  const { city, selectCity, weathers } = useWeatherList()
  const { position, next, prev, list, pageSize } = usePagination(weathers)

  return (
    <WeatherBlock>
      <WeatherTitle>7 Days Forecast</WeatherTitle>
      <CitySelect city={city} selectCity={selectCity} />
      {weathers && list
        ? (
          <WeatherContentWrapper>
            <ArrowControlLeft disabled={position === 0} onClick={prev} />
            {list.map(renderWeather)}
            <ArrowControlRight disabled={position === weathers.length - pageSize} onClick={next} />
          </WeatherContentWrapper>
          )
        : (
          <EmptyWeatherBlock>
            <EmptyWeatherIcon src={placeholderIcon}></EmptyWeatherIcon>
            <EmptyWeatherPlaceholder>Fill in all the fields and the weather will be displayed</EmptyWeatherPlaceholder>
          </EmptyWeatherBlock>
          )
      }
    </WeatherBlock>
  )
}
