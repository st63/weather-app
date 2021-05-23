import { createSelector } from 'reselect'
import { WeatherState } from './types'

const weatherSelector = (state: any): WeatherState => state.weather

export const withWeatherList = createSelector(weatherSelector, ({ list }) => list)
