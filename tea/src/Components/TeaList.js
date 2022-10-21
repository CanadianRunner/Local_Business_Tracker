import React from 'react'
import Tea from './Tea';
import PropTypes from 'prop-types'

function TeaList(props) {
  return (
    <React.Fragment>
    <hr />
    {props.teaList.map((tea) => 
      <Tea
        onClick = {props.onTeaClick}
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

TeaList.propTypes = {
  onTeaClick: PropTypes.func,
  teaList: PropTypes.array 
};

export default TeaList
