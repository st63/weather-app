import axios from 'axios'
import { APP_ID } from '../config'
import { formatDateDailyWeather } from '../utils'
import { CurrentWeather, WeatherListResponse, CurrentWeatherResponse } from '../types'

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

const mapDailyWeather = (day: CurrentWeather): Weather => ({
  date: formatDateDailyWeather(day.dt), 
  temp: Math.round(day.temp.day),
  icon: day.weather[0].icon
})

export const getWeather = async (city: string): Promise<Weather[]> => {
  const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?${city}&exclude=current,minutely,hourly,alerts&units=metric&appid=${APP_ID}`) as WeatherListResponse

  return data.daily.map(mapDailyWeather)
}

const mapWeather = (day: CurrentWeather): Weather => ({
  date: day.dt,
  temp: Math.round(day.temp),
  icon: day.weather[0].icon
})

export const getWeatherOfDay = async (city: string, date: string): Promise<WeatherData> => {
  // @ts-ignore
  const formattedDay: number = new Date(date) / 1000
  const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?${city}&dt=${formattedDay}&units=metric&appid=${APP_ID}`) as CurrentWeatherResponse

  return {
    city,
    date,
    weather: mapWeather(data.current),
  }
}
