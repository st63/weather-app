import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { mainPageReducer } from './mainPage/reducer'

const reducers = combineReducers({
  mainPage: mainPageReducer
})

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
