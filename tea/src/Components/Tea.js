import React from 'react'
import PropTypes from 'prop-types'

function Tea(props) {
  const inStock = props.cups === 0 ? 'Out of stock' : props.cups;
  return (
    <React.Fragment>
      <div onClick= {() => props.onTeaClick(props.id)}>
        <h3>{props.name} - {props.blend}</h3>
        <p>Price: ${props.price}</p>
        <p>Cups: {inStock}</p>
        <hr />
      </div>
    </React.Fragment>
  )
}

Tea.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  cups: PropTypes.number,
  id: PropTypes.string, 
  onTeaClick: PropTypes.func
}

export default Tea
