import { handleActions } from 'redux-actions'
import { Weather, WeatherState } from './types'
import { saveWeathers, saveWeather } from './actions'
import { WeatherData } from '../../api'

const initialState: WeatherState = {
  list: {}
}

export const weatherReducer = handleActions<WeatherState, any>(
  {
    [`${saveWeathers}`]: (state, { payload }: { payload: Weather[] }) => {
      return {
        ...state,
        list: {
          samara: {
            d: payload[0]
          }
        }
      }
    },
    [`${saveWeather}`]: (state, { payload }: { payload: WeatherData }) => {
      const { city, date, weather } = payload

      return {
        ...state,
        list: {
          ...state.list,
          [city]: {
            ...state.list?.[city],
            [date]: weather
          }
        }
      }
    }
  },
  initialState
)
