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
          console.log(arguments);
        }
      },
      creditCard: {
        type: "text",
        placeholder: "____.____.____.____",
        class: "input-creditCard",
        limit: 16,
        validation: function() {
          let result = CCValidation.number(arguments[0].target.value);

          return result.isPotentiallyValid || result.isValid;
        }
      },
      number: {
        type: "number",
        placeholder: "0",
        class: "input-text",
        validation: function() {
        }
      },
      cvv: {
        type: "text",
        placeholder: "___",
        class: "input-cvv",
        limit: 3,
        min: 3,
        validation: function() {
        }
      },
      date: {
        type: "text",
        class: "input-date",
        placeholder: "__/__/____",
        validation: function() {
        }
      },
      creditCardExpiration: {
        type: "text", // check how to month bcuz im dumbb
        class: "input-date",
        placeholder: "__/____",
        pattern: "([0-1]{2})\\/?([0-9]{4})",
        limit: 7,
        min: 6,
        validation: function() {
          if(arguments[0].target.value.length > 3) {
            if(arguments[0].target.value.substr(2, 1) !== '/') {
              let tmp = arguments[0].target.value.substr(0, 2);
              tmp += "/";
              tmp += arguments[0].target.value.substr(2, arguments[0].target.value.length - 2);
              arguments[0].target.value = tmp;
            }
          }
        },
      },
    }
  }

  render() {
    let type = this.state.inputType[this.props.type];

    return([
      <label>{this.props.label === undefined ? '' : this.props.label}</label>,
      <input className={type.class}
            type={type.type}

            minLength={type.min === undefined ?
                0 :
                type.min
            }
            maxLength={type.limit === undefined ? 64 : type.limit}
            placeholder={this.props.placeholder === undefined ? type.placeholder : this.props.placeholder}
            onChange={() => {
              let isValid = type.validation(arguments[0]);
              console.log(isValid);
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
