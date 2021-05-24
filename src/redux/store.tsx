import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'
import { weatherReducer } from './weather/reducer'

const reducers = combineReducers({
  weather: weatherReducer
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

const persistConfig = {
	key: 'root',
	storage,
 }

export const store = createStore(persistReducer<any, any>(persistConfig, reducers), enhancer)

export const persistor = persistStore(store);
