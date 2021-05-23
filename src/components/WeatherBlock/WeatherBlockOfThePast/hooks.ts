import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withWeatherList } from '../../../redux/weather/selectors'
import {useWeatherFields} from '../hooks'
import { saveWeather } from '../../../redux/weather/actions'
import { getWeatherOfDay } from '../../../api'

export const useWeatherByDate = () => {
  const { city, selectCity, date, selectDate } = useWeatherFields()
  const weatherList = useSelector(withWeatherList)
  // @ts-ignore
  const weather = city && date && weatherList?.[city]?.[date]

  useWeatherOfDayApi(city, date, !!weather)

  return { weather, city, selectCity, date, selectDate }
}

export const useWeatherOfDayApi = (city?: string, date?: string, cached?: boolean) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (city && date && !cached) {
      getWeatherOfDay(city, date).then(d => dispatch(saveWeather(d)))
    }
  }, [city, date])
}