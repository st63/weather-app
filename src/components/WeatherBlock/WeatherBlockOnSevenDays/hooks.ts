import { useState, useEffect } from 'react'
import { useMediaQuery } from 'beautiful-react-hooks'
import { Weather, getWeather } from '../../../api'
import {useWeatherFields} from '../hooks'
import { useDispatch } from 'react-redux'
import { saveWeathers } from '../../../redux/weather/actions'

export const useWeatherList = () => {
  const [weathers, saveWeathers] = useState<Weather[]>()
  const { city, selectCity } = useWeatherFields()

  useEffect(() => {
    if (city) {
      getWeather(city).then(saveWeathers)
    }
  }, [city])

  return { weathers, city, selectCity }
}

export const usePagination = (weathers?: Weather[]) => {
  const isCommon: boolean = useMediaQuery('(min-width: 706px)')
  const isMobile: boolean = useMediaQuery('(max-width: 705px)')

  const PAGE_SIZE_BY_DEVICE = {
    COMMON: 3,
    MOBILE: 7
  }

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

export const useWeatherListApi = (city?: string) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (city) {
      getWeather(city).then(d => dispatch(saveWeathers(d)))
    }
  }, [city])
}