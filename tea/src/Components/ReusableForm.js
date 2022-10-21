import React from 'react'
import PropTypes from 'prop-types'

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}
    </React.Fragment>
  )
}

ReusableForm.propTypes = {

}

export default ReusableForm
