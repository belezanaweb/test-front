import React from "react";
import { Formik, Form as FormikForm, useFormikContext } from "formik";
import * as S from "./Form.styles";

const MyForm = ({ children }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <FormikForm onSubmit={handleSubmit}>
      <S.Fieldset>{children}</S.Fieldset>
    </FormikForm>
  );
};

export const Form = ({
  initialValues,
  validationSchema,
  onSubmit,
  ...rest
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <MyForm {...rest} />
    </Formik>
  );
};
