import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm'

function NewTeaForm(props) {
  const handleNewTeaFormSubmission = (event) => {
    event.preventDefault();
    props.onNewTeaCreation({name: event.target.name.value, blend: event.target.blend.value, price: parseInt(event.target.price.value), cups: parseInt(event.target.cups.value), id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTeaFormSubmission}
        buttonText='Add a cup of tea!' />
    </React.Fragment>
  )
}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
}

export default NewTeaForm
