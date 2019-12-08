import React, { Component } from 'react';
import './Input.css';
import * as CCValidation from 'card-validator';

class Input extends Component {
  state = {
    valid: false,
    inputType: {
      text: {
        type: "text",
        placeholder: "",
        class: "input-text",
        validation: function() {
        }
      },
      creditCard: {
        type: "text",
        placeholder: "____.____.____.____",
        class: "input-creditCard",
        pattern: "[0-9]{16}",
        limit: 16,
        validation: function() {
          arguments[0].target.value = arguments[0].target.value.replace(/[^0-9]/g, '');
          let result = CCValidation.number(arguments[0].target.value);
          return result.isPotentiallyValid || result.isValid;
        }
      },
      number: {
        type: "number",
        placeholder: "0",
        class: "input-text",
        validation: function() {
          arguments[0].target.value = arguments[0].target.value.replace(/[^0-9]/g, '');
          return true;
        }
      },
      cvv: {
        type: "text",
        placeholder: "___",
        class: "input-cvv",
        pattern: "[0-9]{3}",
        limit: 3,
        min: 3,
        validation: function() {
          arguments[0].target.value = arguments[0].target.value.replace(/[^0-9]/g, '');
        }
      },
      date: {
        type: "text",
        class: "input-date",
        placeholder: "__/__/____",
        pattern: "([1-9]|[12][0-9]|3[01])\\/(0+[1-9]|1[0-2])\\/?([0-9]{4})",
        validation: function() {
        }
      },
      creditCardExpiration: {
        type: "text", // check how to month bcuz im dumbb
        class: "input-date",
        placeholder: "__/____",
        pattern: "(0+[1-9]|1[0-2])\\/?([0-9]{4})",
        limit: 7,
        min: 6,
        validation: function() {
          let curDate = new Date();
          let month = 0;
          let year = 0;
          arguments[0].target.value = arguments[0].target.value
            .replace(/\//g, '') // only one date marker
            .replace(/[^0-9]/g, ''); // only numbers

          if(arguments[0].target.value.length > 3) {
            if(arguments[0].target.value.substr(2, 1) !== '/') {
              month = arguments[0].target.value.substr(0, 2);
              year = arguments[0].target.value.substr(2, arguments[0].target.value.length - 2);
              arguments[0].target.value = `${month}/${year}`;
            } else {
              month = arguments[0].target.value.substr(0, 2);
              year = arguments[0].target.value.substr(3, arguments[0].target.value.length - 2);
              arguments[0].target.value = `${month}/${year}`;
            }
          }

          return parseInt(year) > curDate.getFullYear() && parseInt(month) > curDate.getMonth();
        },
      },
    }
  }

  defaultValidation()
  {
    return false;
  }

  render() {
    let type = this.state.inputType[this.props.type];

    return([
      <label key="description-label">{this.props.label === undefined ? '' : this.props.label}</label>,
      <input key="" className={type.class}
            type={type.type}

            minLength={type.min === undefined ?
                0 :
                type.min
            }
            maxLength={type.limit === undefined ? 64 : type.limit}
            placeholder={this.props.placeholder === undefined ? type.placeholder : this.props.placeholder}
            onChange={(ev) => {
              let isValid = type.validation(ev);
              ev.target.checkValidity();

              this.setState({
                valid: isValid && ev.target.validity.valid
              })
            }}
            required={this.props.required !== undefined}
            disabled={this.props.disabled !== undefined}
            pattern={this.props.pattern !== undefined ?
                this.props.pattern : // if exists get this ( from caller )
                type.pattern === undefined ?
                  undefined :
                  type.pattern // if exists get this ( from type )
            }
            data-valid={this.state.valid}
      />
    ]);
  }
}

export default Input;
