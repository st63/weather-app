import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { weatherReducer } from './weather/reducer'

const reducers = combineReducers({
  weather: weatherReducer,
})

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

let enhancer = applyMiddleware(thunkMiddleware)

const isDebug = process.env.NODE_ENV === 'development'
// @ts-ignore
if (isDebug && window.__REDUX_DEVTOOLS_EXTENSION__) {
  // @ts-ignore
  enhancer = compose(enhancer, window.__REDUX_DEVTOOLS_EXTENSION__())
}

export const store = createStore(reducers, enhancer)
