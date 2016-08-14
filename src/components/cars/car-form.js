import React, { Component, PropTypes } from 'react'
import Input from 'react-toolbox/lib/input'
import { Button } from 'react-toolbox/lib/button'

export class CarForm extends Component {
  state = { ...this.initFormState }

  componentWillMount() {
    this.props.callbacks({
      resetForm: this.resetForm,
    })
  }

  initFormState = { name: '' }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleChange = name => value => {
    this.setState({ ...this.state, [name]: value })
  }

  resetForm = () => {
    this.setState({ ...this.state, ...this.initFormState })
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <Input
            type="text" label="car name" required
            value={ this.state.name } onChange={ this.handleChange('name') }
          />
          <Button icon="add_circle" label="Save" raised primary type="submit" />
        </form>
      </div>
    )
  }
}

CarForm.defaultProps = {
  onSubmit: () => null,
  callbacks: () => null,
}

CarForm.propTypes = {
  onSubmit: PropTypes.func,
  callbacks: PropTypes.func,
}

export default CarForm
