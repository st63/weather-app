import React from 'react'

export interface IWeatherToDisplay {
  date: number | string
  temp: number
  icon: string
}

export interface IWeather {
  weatherForSevenDays: Array<IWeatherToDisplay>
  weatherToDisplay: Array<IWeatherToDisplay>
}

export interface IWeatherOfDay {
  temp: number
  icon: string
}

export interface IMainPageState {
  weatherForSevenDays: Array<IWeatherToDisplay>
  weatherToDisplay: Array<IWeatherToDisplay>
  weatherOfDay: IWeatherOfDay
}

export interface IWeatherBlockOnSevenDays {
  weatherForSevenDays: Array<IWeatherToDisplay>
  weatherToDisplay: Array<IWeatherToDisplay>
  thunkGetWeather(city: string, isMobile: boolean): void
  changeWeatherToDisplayAC(weatherToDisplay: Array<IWeatherToDisplay>): void
}

export interface IWeatherBlockOfThePast {
  weatherOfDay: IWeatherOfDay
  thunkGetWeatherOfDay(city: string | undefined, date: string): void
}

export interface ICitySelect {
  city: string | undefined
  selectCity(event: React.ChangeEvent<HTMLSelectElement>): void
}

export interface IDateInput {
  selectDate(event: React.ChangeEvent<HTMLInputElement>): void
}
