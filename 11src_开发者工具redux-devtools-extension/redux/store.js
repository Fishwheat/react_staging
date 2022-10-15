import { legacy_createStore as createStore, applyMiddleware } from 'redux'
// import countReducer from './reducers/count'
// import personReducer from './reducers/persons'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'

// combineReducers传入的对象就是store里维护的对象
// const reducers = combineReducers({
//   count: countReducer,
//   persons: personReducer
// })
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
