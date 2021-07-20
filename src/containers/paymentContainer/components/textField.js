import React, { useState } from 'react';
import './textField.css';
import InputMask from 'react-input-mask';
import classNames from 'classnames';

const TextField = ({ id, className, label, onChange, value, mask, placeholder, isValid }) => {
  const [hasFocus, setHasFocus] = useState(false);

  return (
    <div
      className={classNames('textField', isValid === false && !hasFocus ? 'invalid' : null)}
      mask={mask}
    >
      <label htmlFor={id} className="label">
        {label}
      </label>
      <InputMask
        id={id}
        data-testid={id}
        className={classNames('input', className, { invalidInput: isValid === false })}
        placeholder={placeholder}
        mask={mask}
        onChange={onChange}
        value={value}
        alwaysShowMask={true}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
      {isValid === false && !hasFocus && <span className="invalidMessage">Invalid Field</span>}
    </div>
  );
};

export { TextField };
