import React from "react";
import { Formik, Form as FormikForm, useFormikContext } from "formik";

const MyForm = ({ children }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <FormikForm onSubmit={handleSubmit}>
      <fieldset>{children}</fieldset>
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
