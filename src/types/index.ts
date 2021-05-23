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
  isWeatherLoadedFor7Days: boolean,
  isWeatherLoadedOfDay: boolean
}

export interface IWeatherBlockOnSevenDays {
  weatherForSevenDays: Array<IWeatherToDisplay>
  weatherToDisplay: Array<IWeatherToDisplay>
  thunkGetWeather(city: string, isTablet: boolean, isMobile: boolean): void
  changeWeatherToDisplayAC(weatherToDisplay: Array<IWeatherToDisplay>): void
  isWeatherLoadedFor7Days: boolean
}

export interface IWeatherBlockOfThePast {
  weatherOfDay: IWeatherOfDay
  thunkGetWeatherOfDay(city: string | undefined, date: string): void
  isWeatherLoadedOfDay: boolean
}

export interface IWeatherCard {
  date?: number | string
  weather: {
    temp: number
    icon: string
  }
  width: string
  heightIcon: string,
}

export interface ICitySelect {
  city?: string
  selectCity(event: React.ChangeEvent<HTMLSelectElement>): void
}

export interface IDateInput {
  date?: string
  selectDate(event: React.ChangeEvent<HTMLInputElement>): void
}
