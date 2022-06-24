import { combineReducers } from 'redux';
import citiesReducers from './citiesReducer';
import itinerariesReducers from './itinerariesReducer'


const mainReducer = combineReducers({
    citiesReducers,
    itinerariesReducers
})

export default mainReducer