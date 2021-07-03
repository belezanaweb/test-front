import * as S from "./Button.styles";

export const Button = ({ label, ...props }) => {
  return (
    <S.Button type="submit" {...props}>
      {label}
    </S.Button>
  );
};
