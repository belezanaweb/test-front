import React, { forwardRef } from "react";
import { useFormikContext } from "formik";

const Form = forwardRef(({ onSubmit, children, ...rest }, ref) => {
  debugger;
  // const { handleSubmit } = useFormikContext();

  return (
    <form onSubmit={onSubmit} ref={ref} {...rest}>
      <fieldset>{children}</fieldset>
    </form>
  );
});

export { Form };
