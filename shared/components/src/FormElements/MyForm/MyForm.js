import React, { useRef } from "react";
import { Form } from "@unform/web";
import * as S from "./MyForm.styles";

// const MyForm = ({ children }) => {
//   const { handleSubmit } = useFormikContext();

//   return (
//     <FormikForm onSubmit={handleSubmit}>
//       <S.Fieldset>{children}</S.Fieldset>
//     </FormikForm>
//   );
// };

// export const Form = ({
//   initialValues,
//   validationSchema,
//   onSubmit,
//   ...rest
// }) => {
//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={onSubmit}
//       validationSchema={validationSchema}
//     >
//       <MyForm {...rest} />
//     </Formik>
//   );
// };

export const MyForm = ({ onSubmit, children }) => {
  const formRef = useRef(null);
  // Use formRef.current to access all methods
  return (
    <Form ref={formRef} onSubmit={onSubmit}>
      {children}
    </Form>
  );
};
