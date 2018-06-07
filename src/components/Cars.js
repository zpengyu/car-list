import React from 'react'
import PropTypes from 'prop-types'

const Cars = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
)

Cars.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default Cars
