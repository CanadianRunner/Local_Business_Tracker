import React from 'react'
import Tea from './Tea';
import PropTypes from 'prop-types'

function TeaList(props) {
  return (
    <React.Fragment>
    <hr />
    {props.teaList.map((tea) => 
      <tea
        onClick = {props.onteaSelection}
        name={tea.name}
        blend={tea.blend}
        price={tea.price}
        cups={tea.cups}
        id={tea.id}
        key={tea.id}/>
    )}
  </React.Fragment>
  )
}

TeaList.propTypes = {}

export default TeaList
