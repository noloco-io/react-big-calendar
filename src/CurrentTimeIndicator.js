import PropTypes from 'prop-types'
import React from 'react'

const CurrentTimeIndicator = ({ position }) => (
  <div className="rbc-current-time-indicator" style={{ top: `${position}%` }} />
)

CurrentTimeIndicator.propTypes = {
  position: PropTypes.number,
}

export default CurrentTimeIndicator
