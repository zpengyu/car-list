import React from 'react'
import PropTypes from 'prop-types'
import './Car.css'

const Car = ({ car }) => (
  <li className={'car-item'}>
    <span className={'car-reg'}>{car.reg}</span>
    <span className={'car-name'}>{car.name}</span>
    <span className={'car-year'}>{car.year}</span>
    <div className={'car-color'} ><span style={{backgroundColor: car.color}}>&nbsp;</span></div>
  </li>
)

Car.propTypes = {
  car: PropTypes.shape({
    reg: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired
}

export default Car
