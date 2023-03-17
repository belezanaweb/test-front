import { FC } from "react";
import { IInput } from "./Input.interface";
import { useFormContext, FieldError } from "react-hook-form";
import "./Input.scss";

const Input: FC<IInput> = ({label, name, type, placeholder, min, max, onChange}) => {
  const {register, formState: {errors}} = useFormContext();


  return (
    <div className="input">
      <label>{label}</label>
      <input
        min={min}
        max={max}
        className={`input_field ${errors[name] ? 'input_error' : ''}`}
        {...register(name)}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      {errors[name] && (
        <span className="input_error_message">
            {(errors[name] as FieldError)?.message}
        </span>
      )}
    </div>
  );
};

export default Input;
