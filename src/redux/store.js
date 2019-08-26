import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './userDuck'
import bootcampsReducer, { getBootcampsAction } from './bootcampDuck'

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let rootReducer = combineReducers({
    user: userReducer,
    bootcamps: bootcampsReducer
})

export default function () {
    let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    store.dispatch({ type: "GET_INITIAL_DATA" })
    getBootcampsAction()(store.dispatch)
    return store
} 