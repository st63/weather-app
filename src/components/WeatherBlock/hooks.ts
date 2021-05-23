import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { saveWeather, saveWeathers } from '../../redux/weather/actions'
import { getWeatherOfDay, getWeather } from '../../api'

export const useWeatherOfDayApi = (city?: string, date?: string, cached?: boolean) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (city && date && !cached) {
      getWeatherOfDay(city, date).then(d => dispatch(saveWeather(d)))
    }
  }, [city, date])
}

export const useWeatherListApi = (city?: string) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (city) {
      getWeather(city).then(d => dispatch(saveWeathers(d)))
    }
  }, [city])
}

