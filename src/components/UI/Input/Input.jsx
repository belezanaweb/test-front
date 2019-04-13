import React, { Component } from 'react'
import MaskedInput from 'react-text-mask'
import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const styles = {
  block: {
    display: 'block',
  },
  container: {
    width: '100%',
    margin: { bottom: 20 },
    '&:last-child': {
      margin: { bottom: 0 }
    }
  },
  label: {
    display: 'block',
    color: '#CCC',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: '22px',
  },
  input: {
    display: 'block',
    backgroundColor: '#fff',
    border: {
      width: 1,
      style: 'solid',
      color: '#E7E7E7',
    },
    width: '100%',
    height: 45,
    lineHeight: '45px',
    boxShadow: {
      inset: 'inset',
      x: 0,
      y: 1,
      blur: 2,
      color: 'rgba(0,0,0,0.2)',
    },
    borderRadius: 3,
    fontSize: 16,
    padding: [0, 13],
    color: '#E0E7EE',
    outline: 'none',
    transition: {
      property: 'all',
      duration: '.2s',
      timingFunction: 'ease',
    },
    '&:focus': {
      borderColor: '#A43287',
      color: '#212121',
    },
    '&::placeholder': {
      color: '#E0E7EE',
    },
  },
  errorInput: {
    color: '#212121',
    borderColor: '#F30',
    '&:focus': {
      borderColor: '#F30',
    },
  },
  errorMessage: {
    display: 'block',
    color: '#F30',
    fontSize: 12,
    lineHeight: '22px',
    margin: { bottom: -22 }
  }
}

const { classes } = jss.createStyleSheet(styles).attach()

class Input extends Component {
  state = {
    value: '',
    used: false,
    valid: false,
    error: null,
  }

  onInputChange(event) {
    if (this.props.onChange)
      this.props.onChange(event)

    const value = (event.target.value || '').replace(/_$/g, '')

    // Validate value
    let error = null
    for (let validation of (this.props.validations || [])) {
      const isValid = validation.handler(value)
      if (!isValid) {
        error = validation.error
        break
      }
    }

    const valid = !error

    // Call custom events
    if (valid && this.props.onValid)
      this.props.onValid(value)
    if (this.state.valid && !valid && this.props.onInvalid)
      this.props.onInvalid(value)

    // Refresh state
    this.setState({
      used: true,
      value,
      valid,
      error,
    })
  }

  render() {
    const {
      label = '',
      mask = null,
      ...remainingProps
    } = this.props

    let element

    const commonProps = {
      className: classes.input + (this.state.error ? ' ' + classes.errorInput : ''),
      value: this.state.value,
      onChange: event => this.onInputChange(event)
    }

    // Check masked input
    if (mask) {
      const maskArray = (mask || '').split('').map(char => char === '#' ? /\d/ : char)
      element = <MaskedInput {...remainingProps} {...commonProps} mask={maskArray} />
    } else {
      element = <input {...remainingProps} {...commonProps} />
    }

    // Adds error
    let error = this.state.error ? (
      <span className={classes.errorMessage}>
        {this.state.error}
      </span>
    ) : null

    return (
      <div className={classes.container}>
        <label className={classes.block}>
          <span className={classes.label}>{label}:</span>
          {element}
          {error}
        </label>
      </div>
    )
  }
}

export default Input
