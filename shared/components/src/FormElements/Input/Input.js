import {
  CustomError,
  CustomField,
  InputWrapper,
  LabelText,
} from "./Input.styles";

export const Input = ({ label, id, name, ...props }) => {
  return (
    <InputWrapper>
      <label>
        <LabelText htmlFor={id}>{label}</LabelText>
        <CustomField id={id} name={name} {...props} />
        <CustomError component="div" name={name} />
      </label>
    </InputWrapper>
  );
};
