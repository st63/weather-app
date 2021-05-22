import { GET_WEATHER, CHANGE_WEATHER_TO_DISPLAY, GET_WEATHER_OF_DAY } from './actions'
import { IMainPageState, IWeatherOfDay, IWeatherToDisplay } from '../../types'

const defaultState = {
  weatherForSevenDays: [] as Array<IWeatherToDisplay>,
  weatherToDisplay: [] as Array<IWeatherToDisplay>,
  weatherOfDay: {} as IWeatherOfDay,
  isWeatherLoadedFor7Days: false,
  isWeatherLoadedOfDay: false
}

export function mainPageReducer (state: IMainPageState = defaultState, action: any): IMainPageState {
  switch (action.type) {
    case GET_WEATHER:
      state = {
        ...state,
        weatherForSevenDays: action.weatherForSevenDays,
        weatherToDisplay: action.weatherToDisplay,
        isWeatherLoadedFor7Days: true
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
        },
        isWeatherLoadedOfDay: true
      }
      break
  }
  return state
}
