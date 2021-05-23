type CurrentWeatherInfo = {
  description: string
  icon: string
  id: number
  main: string
}

type CurrentWeather = {
  clouds: number
  dew_point: number
  dt: number
  feels_like: number
  humidity: number
  pressure: number
  sunrise: number
  sunset: number
  temp: number
  uvi: number
  visibility: number
  wind_deg: number
  wind_gust: number
  wind_speed: number
  weather: CurrentWeatherInfo[]
}

type DailyWeather = CurrentWeather & {
  feels_like: {
      day: number
      eve: number
      morn: number
      night: number
  }
  moon_phase: number
  moonrise: number
  moonset: number
  pop: number
  rain: number
  temp: {
      day: number
      eve: number
      max: number
      min: number
      morn: number
      night: number
  }
}

type WeatherList = DailyWeather[]

type WeatherListResponse = {
data: {
  daily: WeatherList
}
}

type CurrentWeatherResponse = {
data: {
  current: CurrentWeather
}
}