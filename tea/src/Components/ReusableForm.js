import React from 'react'
import PropTypes from 'prop-types'

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input 
            type="text"
            name="name"
            placeholder='Name'/>
        <input 
            type="text"
            name="blend"
            placeholder='Blend'/>
        <input 
            type="number"
            min={1}
            name="price"
            placeholder='Price'/>
        <input 
            type="number"
            min={1}
            name="cups"
            placeholder='Cups'/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  buttonText: PropTypes.string,
  formSubmissionHandler: PropTypes.func  
}

export default ReusableForm
