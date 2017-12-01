import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import searchInfo from './searchInfo'
import favourites from './favourites'

export default combineReducers({
    router: routerReducer,
    searchInfo,
    favourites
})
