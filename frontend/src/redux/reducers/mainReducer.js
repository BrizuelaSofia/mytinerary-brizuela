import { combineReducers } from 'redux';
import citiesReducers from './citiesReducer';
import itinerariesReducers from './itinerariesReducer'
import userReducers from './usersReducer'

const mainReducer = combineReducers({
    citiesReducers,
    itinerariesReducers,
    userReducers
})

export default mainReducer