import { GET_WEATHER, CHANGE_WEATHER_TO_DISPLAY, GET_WEATHER_OF_DAY } from './actions'
import { IMainPageState, IWeatherOfDay, IWeatherToDisplay } from '../../types'

const defaultState = {
  weatherForSevenDays: [] as Array<IWeatherToDisplay>,
  weatherToDisplay: [] as Array<IWeatherToDisplay>,
  weatherOfDay: {} as IWeatherOfDay
}

export function mainPageReducer (state: IMainPageState = defaultState, action: any): IMainPageState {
  switch (action.type) {
    case GET_WEATHER:
      state = {
        ...state,
        weatherForSevenDays: action.weatherForSevenDays,
        weatherToDisplay: action.weatherToDisplay
      }
      break

    case CHANGE_WEATHER_TO_DISPLAY:
      state = {
        ...state,
        weatherToDisplay: action.weatherToDisplay
      }
      break

    case GET_WEATHER_OF_DAY:
      state = {
        ...state,
        weatherOfDay: {
          temp: action.temp,
          icon: action.icon
        }
      }
      break
  }
  return state
}
