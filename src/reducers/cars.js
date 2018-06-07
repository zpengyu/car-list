import { combineReducers } from 'redux'
import { RECEIVE_CARS, FILTER_CARS } from '../constants/ActionTypes'

const carReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CARS:
      return {
        ...state,
        ...action.cars.reduce((obj, car) => {
          obj[car.id] = car
          return obj
        }, {})
      }
    default:
      return state
  }
}

const carListReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CARS:
      return action.cars.map(car => car.id)
    case FILTER_CARS:
      if(action.year.length>0)
        return action.cars.filter(car => car.year.toString().startsWith(action.year)).map(car=>car.id)
      else
        return action.cars.map(car => car.id)
    default:
      return state
  }
}

export default combineReducers({
  carReducer,
  carListReducer
})

export const getCar = (state, id) =>
  state.carReducer[id]

export const getAllCars = state =>
  state.carListReducer.map(id => getCar(state, id))
