import React from 'react';
import './textField.css';
import InputMask from 'react-input-mask';
import classNames from 'classnames';

const TextField = ({ id, className, label, onChange, value, mask, placeholder, isValid }) => (
  <div className="textField" mask={mask}>
    <label htmlFor={id} className="label">
      {label}
    </label>
    <InputMask
      id={id}
      data-testid={id}
      className={classNames(
        'input',
        className,
        { invalidInput: isValid === false },
        { validInput: isValid === true }
      )}
      placeholder={placeholder}
      mask={mask}
      onChange={onChange}
      value={value}
      alwaysShowMask={true}
    />
  </div>
);

export { TextField };
