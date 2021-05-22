import axios from 'axios'

export const getWeather = async (city: string) => {
  const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?${city}&exclude=current,minutely,hourly,alerts&units=metric&appid=04160438ae6d577745ad287cda3d9bca`)

  return data.daily
}

export const getWeatherOfDay = async (city: string, date: string) => {
  const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?${city}&dt=${date}&units=metric&appid=04160438ae6d577745ad287cda3d9bca`)

  return data.current
}
