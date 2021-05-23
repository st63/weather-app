import React, { FC, useState, useEffect } from 'react'
import { useMediaQuery } from 'beautiful-react-hooks'
import { CitySelect } from '../../CitySelect'
import { WeatherCard } from '../../WeatherCard'
import { WeatherBlock, WeatherTitle, EmptyWeatherBlock, EmptyWeatherIcon, EmptyWeatherPlaceholder } from '../styles'
import { WeatherContentWrapper, ArrowControlLeft, ArrowControlRight } from './styles'
import { IWeatherToDisplay } from '../../../types'
import placeholderIcon from '../../../images/placeholder-icon.svg'

import { useWeatherFields } from '../hooks'
import { Weather, getWeather } from '../../../api'

const useWeatherList = () => {
  const [weathers, saveWeathers] = useState<Weather[]>()
  const { city, selectCity } = useWeatherFields()

  useEffect(() => {
    if (city) {
      getWeather(city).then(saveWeathers)
    }
  }, [city])

  return { weathers, city, selectCity }
}

const renderWeather = (day: IWeatherToDisplay) => <WeatherCard key={day.date} date={day.date} weather={day} heightIcon="115px" width="174px" />

const PAGE_SIZE_BY_DEVICE = {
  COMMON: 3,
  MOBILE: 7
}

const usePagination = (weathers?: Weather[]) => {
  const isCommon: boolean = useMediaQuery('(min-width: 706px)')
  const isMobile: boolean = useMediaQuery('(max-width: 705px)')

  const [position, updatePosition] = useState(0)
  const [pageSize, updatePageSize] = useState(PAGE_SIZE_BY_DEVICE.COMMON)

  const next = () => {
    updatePosition(position + 1)
  }

  const prev = () => {
    updatePosition(position - 1)
  }

  useEffect(() => {
    if (isMobile) {
      updatePageSize(PAGE_SIZE_BY_DEVICE.MOBILE)
    }

    if (isCommon) {
      updatePageSize(PAGE_SIZE_BY_DEVICE.COMMON)
    }
  }, [isCommon, isMobile])

  const list = weathers ? weathers.slice(position, position + pageSize) : []

  return {
    position,
    next,
    prev,
    list,
    pageSize
  }
}

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
