import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import sitesReducer from './reducers/sitesReducer';

const defaultState = {
    defaultCityCode: 215854
};

const store = createStore(
    combineReducers({
        sitesReducer,
        defaultState
    }),
    {},
    applyMiddleware(thunk)
)

export default store;