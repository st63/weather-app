import { useSelector } from 'react-redux'
import { withWeatherList } from '../../../redux/weather/selectors'
import {useWeatherFields} from '../WeatherBlockOnSevenDays/hooks'
import {useWeatherOfDayApi} from '../hooks'

export const useWeatherByDate = () => {
  const { city, selectCity, date, selectDate } = useWeatherFields()
  const weatherList = useSelector(withWeatherList)
  // @ts-ignore
  const weather = city && date && weatherList?.[city]?.[date]

  useWeatherOfDayApi(city, date, !!weather)

  return { weather, city, selectCity, date, selectDate }
}