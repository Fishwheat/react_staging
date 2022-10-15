import { combineReducers } from 'redux'
import count from './count'
import persons from './persons'

// combineReducers传入的对象就是store里维护的对象
export default combineReducers({
  count,
  persons
})