import React from 'react'
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm'

function NewTeaForm(props) {
  const { tea } = props;
  const handleNewTeaFormSubmission = (event) => {
    event.preventDefault();
    props.onNewTeaCreation({name: event.target.name.value, blend: event.target.blend.value, price: parseInt(event.target.price.value), cups: parseInt(event.target.cups.value), id: tea.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTeaFormSubmission}
        buttonText='Edit Tea' />
    </React.Fragment>
  )
}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
}

export default NewTeaForm
