import { combineReducers } from 'redux'
import charactersReducer from './charactersReducer'
import favoritesReducer from './favoritesReducer'
import searchingReducer from './searchingReducer'

const reducer = combineReducers({
  charactersReducer,
  favoritesReducer,
  searchingReducer
})

export default reducer