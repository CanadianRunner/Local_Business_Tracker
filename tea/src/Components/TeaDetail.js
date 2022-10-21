import React from 'react'
import PropTypes from 'prop-types'

function TeaDetail(props) {
  const { tea, onClickDelete, onClickIncrease, onClickDecrease } = props;
  const cupsAvailable = tea.cups === 0 ? "Out of stock" : tea.cups;
  return (
    <React.Fragment>
      <div>
        <h1>Tea Details:</h1>
        <hr />
        <h3>Name: {tea.name}</h3>
        <hr />
        <p>Price: ${tea.price}</p>
        <p>Cups in stock: {cupsAvailable}</p>
        <button onClick={props.onClickEdit}>Update tea</button>
        <button onClick={() => onClickDelete(tea.id)}>Delete tea</button>
        <button onClick={() => onClickIncrease(tea.id)}>Restock</button>
        <button onClick={() => onClickDecrease(tea.id)} disabled={cupsAvailable === "Out of stock"}>Buy</button>
      </div>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickIncrease: PropTypes.func,
  onClickDecrease: PropTypes.func
}
export default TeaDetail
