import React from 'react'
import PropTypes from 'prop-types'

function TeaDetail(props) {
  const { tea, onClickDelete, onClickIncrease, onClickDecrease } = props;
  const cupsAvailable = props.cups === 0 ? "Out of stock" : props.cups;
  //disable buy button
  return (
    <React.Fragment>
      <div>
        <h1>Tea Details:</h1>
        <hr />
        <h3>Name: {tea.name}</h3>
        <h3>Brand: {tea.brand}</h3>
        <hr />
        <p>Price: ${tea.price}</p>
        <p>Cups in stock: {cupsAvailable}</p>
        <button onClick={props.onClickingEdit}>Update tea</button>
        <button onClick={() => onClickDelete(tea.id)}>Delete tea</button>
        <button onClick={() => onClickIncrease(tea.id)}>Restock</button>
      </div>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {}

export default TeaDetail
