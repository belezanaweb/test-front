import * as React from 'react';
import { createJssStyle } from '../helper/styler';
import InputMask from 'react-input-mask';
import clsx from 'clsx';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle(_ => ({
  inputX: {
    '& > label': {
      fontSize: 12,
      color: '#ccc',
      fontWeight: 700
    }
  },
  input: {
    width: '100%',
    boxSizing: 'border-box',
    height: 45,
    borderRadius: 3,
    border: '1px solid #e7e7e7',
    boxShadow: 'inset 0 1px 2px 0 rgba(0,0,0,.2)',
    padding: '15px 13px 12px 13px',
    outline: 'none',
    '&::placeholder': {
      color: '#e7e7e7',
      fontSize: 16
    },
    '&:focus': {
      border: '1px solid #A43287'
    }
  },
  invalid: {
    border: '1px solid red'
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    height: 15
  }
}));
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class Input extends React.Component<IProps, IState> {
  state: IState = {
    invalidated: false,
    touch: false,
    errorMessage: null,
    value: ''
  };

  render() {
    const { label, placeholder, mask } = this.props;
    const { touch, invalidated, errorMessage, value } = this.state;
    return (
      <div>
        <label>{label}</label>
        <InputMask
          value={value}
          placeholder={placeholder}
          onChange={this.handleChange}
          onBlur={this.handleOnBlur}
          onFocus={this.handleOnFocus}
          mask={mask}
          maskChar=" "
          className={clsx(classes.input, {
            [classes.invalid]: touch && invalidated
          })}
        />
        {touch && invalidated && (
          <span className={classes.errorText}>{errorMessage}</span>
        )}
      </div>
    );
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const value = event.target.value;
    this.setState({ value }, this.validateRules);
    if (onChange) {
      onChange(value);
    }
  }

  validateRules = () => {
    const { onValidationRules, isValid } = this.props;
    const { value } = this.state;

    if (onValidationRules) {
      for (const rule of onValidationRules) {
        const validation = rule(value);

        if (validation.valid) {
          this.setState({
            invalidated: false,
            errorMessage: null
          });
        } else {
          this.setState({
            invalidated: true,
            errorMessage: validation.message
          });
          break;
        }
      }

      setImmediate(() => {
        if (isValid) {
          isValid(!this.state.invalidated && this.state.touch);
        }
      });
    }
  }

  handleOnBlur = () => {
    this.setState(
      {
        touch: true
      },
      this.validateRules
    );
  }

  handleOnFocus = () => {
    this.setState({
      touch: false
    });
  }
}

interface IProps {
  label: string;
  placeholder?: string;
  mask?: string;
  onValidationRules?: ValidationRule[];
  onChange?: (value: string) => void;
  isValid?: (value: boolean) => void;
}

type ValidationRule = (input: string) => { valid: boolean; message: string };

interface IState {
  value: string;
  invalidated: boolean;
  touch: boolean;
  errorMessage: string;
}
