import { combineReducers } from 'redux'
import stocks from './stocks'
import visibilityFilter from './visibility.filter'

export default combineReducers({
  stocks,
  visibilityFilter
})