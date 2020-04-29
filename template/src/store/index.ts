import { createStore, combineReducers, ReducersMapObject } from 'redux'
import reducers from '../reducers'

export default createStore(combineReducers({ ...reducers })) 