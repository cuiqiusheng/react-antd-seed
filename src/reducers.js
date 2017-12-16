import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import model from 'Containers/Model/reducer'

const createReducer = (asyncReducers) => {
  return combineReducers({
    model,
    routing: routerReducer,
    ...asyncReducers
  })
}

export default createReducer
