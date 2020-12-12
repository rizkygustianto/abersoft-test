
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Reducer from './reducers/index'

const middlewares = applyMiddleware(thunk);

const store = createStore(Reducer, middlewares)

export default store