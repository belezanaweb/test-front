import { useFormikContext } from "formik";
import * as S from "./Button.styles";

export const Button = ({ label, ...props }) => {
  const { isSubmitting } = useFormikContext();

  return (
    <S.Button type="submit" {...props} disabled={isSubmitting}>
      {label}
    </S.Button>
  );
};
