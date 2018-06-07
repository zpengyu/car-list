import React from 'react'
import PropTypes from 'prop-types'
import './CarFilter.css'

const CarFilter = ({ car, onCarFilterChanged }) => (
    <div className={'car-filter'}>
        <input type='text' onChange={event => onCarFilterChanged(event.target.value)} />
    </div>
)

CarFilter.propTypes = {
    onCarFilterChanged: PropTypes.func.isRequired
}

export default CarFilter
