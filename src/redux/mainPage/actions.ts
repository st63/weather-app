import { Dispatch } from 'react'
import { getWeather, getWeatherOfDay } from '../../api/index'
import { AppStateType } from '../store'
import { IWeatherToDisplay, IWeatherOfDay, IWeather } from '../../types'

export const GET_WEATHER = 'GET_WEATHER'
export const CHANGE_WEATHER_TO_DISPLAY = 'CHANGE_WEATHER_TO_DISPLAY'
export const GET_WEATHER_OF_DAY = 'GET_WEATHER_OF_DAY'

export const thunkGetWeather = (city: string, isMobile: boolean) => (dispatch: Dispatch<ActionsTypes>, getState: () => AppStateType) => {
  getWeather(city).then(res => {
    const weatherForSevenDays: Array<IWeatherToDisplay> = []

    for (const day of res) {
      const formattedDay = {
        date: day.dt,
        temp: Math.round(day.temp.day),
        icon: day.weather[0].icon
      }

      weatherForSevenDays.push(formattedDay)
    }

    let weatherToDisplay: Array<IWeatherToDisplay> = []

    if (!isMobile) {
      weatherToDisplay = weatherForSevenDays.filter((item: IWeatherToDisplay, index: number) => index < 3)
    }

    if (isMobile) {
      weatherToDisplay = [weatherForSevenDays[0]]
    }

    dispatch(getWeatherAC({ weatherForSevenDays, weatherToDisplay }))
  })
}

interface IgetWeatherAC {
  type: typeof GET_WEATHER
  weatherForSevenDays: Array<IWeatherToDisplay>
  weatherToDisplay: Array<IWeatherToDisplay>
}

export const getWeatherAC = ({ weatherForSevenDays, weatherToDisplay }: IWeather): IgetWeatherAC => ({
  type: GET_WEATHER,
  weatherForSevenDays,
  weatherToDisplay
})

// --------------------------------------------------------------------------------------------

interface IChangeWeatherToDisplayAC {
  type: typeof CHANGE_WEATHER_TO_DISPLAY
  weatherToDisplay: Array<IWeatherToDisplay>
}

export const changeWeatherToDisplayAC = (weatherToDisplay: Array<IWeatherToDisplay>): IChangeWeatherToDisplayAC => ({
  type: CHANGE_WEATHER_TO_DISPLAY,
  weatherToDisplay
})

// --------------------------------------------------------------------------------------------

export const thunkGetWeatherOfDay = (city: string, date: string) => (dispatch: Dispatch<ActionsTypes>, getState: () => AppStateType) => {
  getWeatherOfDay(city, date).then(res => {
    const temp: number = Math.round(res.temp)
    const icon: string = res.weather[0].icon

    dispatch(getWeatherOfDayAC({ temp, icon }))
  })
}

export interface IGetWeatherOfDayAC {
  type: typeof GET_WEATHER_OF_DAY
  temp: number
  icon: string
}

export const getWeatherOfDayAC = ({ temp, icon }: IWeatherOfDay): IGetWeatherOfDayAC => ({
  type: GET_WEATHER_OF_DAY,
  temp,
  icon
})

// --------------------------------------------------------------------------------------------

type ActionsTypes = IGetWeatherOfDayAC | IChangeWeatherToDisplayAC | IgetWeatherAC
