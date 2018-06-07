import car_list from '../api/car_list'
import * as types from '../constants/ActionTypes'

export const loadCars = () => dispatch => {
  car_list.getCars(cars => {
    dispatch({
      type: types.RECEIVE_CARS,
      cars
    })
  })
}

export const filterCars = (year) => dispatch => {
  car_list.getCars(cars => {
    dispatch({
      type: types.FILTER_CARS,
      cars,
      year
    })
  })
}
