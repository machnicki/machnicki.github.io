import React, { PropTypes } from 'react'

export function CarForm(props) {
  const formFields = ['name']

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input name="name" required />
      </form>
    </div>
  )

  function handleSubmit(event) {
    event.preventDefault()

    const formResults = {}
    formFields.forEach(name => {
      formResults[name] = event.target[name].value
    })

    props.onSubmit(formResults)
  }
}

CarForm.defaultProps = {
  onSubmit: () => null,
}

CarForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default CarForm
