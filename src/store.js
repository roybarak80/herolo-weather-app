import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history';

import sitesReducer from './reducers/sitesReducer';
export const history = createBrowserHistory();
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