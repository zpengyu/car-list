import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { filterCars } from '../actions'
import { getAllCars } from '../reducers/cars'
import Car from '../components/Car'
import Cars from '../components/Cars'
import CarFilter from "../components/CarFilter";
import './CarsContainer.css'

const CarsContainer = ({ cars, filterCars }) => (
  <Cars title="Cars">
    <CarFilter onCarFilterChanged={(year) => filterCars(year)}/>
    <ul className={'car-list'}>
      {cars.map(car =>
        <Car key={car.id} car={car}/>
      )}
    </ul>
  </Cars>
)

CarsContainer.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    reg: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  })).isRequired,
  filterCars: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  cars: getAllCars(state.cars)
})

export default connect(mapStateToProps, { filterCars })(CarsContainer)
