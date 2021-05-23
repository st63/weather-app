import axios from 'axios'
import { APP_ID } from '../config'
import { formatDateDailyWeather } from '../utils'

export type Weather = {
  date: string
  temp: number
  icon: string
}

export type WeatherData = {
  city: string
  date: string
  weather: Weather
}

const mapDailyWeather = (day: DailyWeather): Weather => ({
  date: formatDateDailyWeather(day.dt),
  temp: Math.round(day.temp.day),
  icon: day.weather[0].icon
})

export const getWeather = async (city: string): Promise<Weather[]> => {
  const { data } = await axios.get<{}, WeatherListResponse>(`https://api.openweathermap.org/data/2.5/onecall?${city}&exclude=current,minutely,hourly,alerts&units=metric&appid=${APP_ID}`)

  return data.daily.map(mapDailyWeather)
}

const mapWeather = (day: CurrentWeather): Weather => ({
  date: formatDateDailyWeather(day.dt),
  temp: Math.round(day.temp),
  icon: day.weather[0].icon
})

export const getWeatherOfDay = async (city: string, date: string): Promise<WeatherData> => {
  const formattedDay: number = new Date(date).getTime() / 1000
  const { data } = await axios.get<{}, CurrentWeatherResponse>(`https://api.openweathermap.org/data/2.5/onecall/timemachine?${city}&dt=${formattedDay}&units=metric&appid=${APP_ID}`)

  return {
    city,
    date,
    weather: mapWeather(data.current),
  }
}