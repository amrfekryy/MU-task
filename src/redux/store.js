import { combineReducers, createStore } from 'redux'
import { dynamicReducersCreator } from './tools'

// list of reducer names to be added to store
const reducerNames = ['students']

const reducers = dynamicReducersCreator(reducerNames)

const enableDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  combineReducers(reducers), enableDevTools
)

export default store
