/* eslint-disable @typescript-eslint/no-empty-function */
import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import { Button, Input } from "components";
import React, { useRef } from "react";
import { CartProps } from "./types";

interface FormData {
  campo1: string;
  campo2: string;
}

const Styleguide: React.FC<CartProps> = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = () => {};

  return (
    <>
      <div>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input.Default
            title="Campo:"
            name="campo1"
            placeholder="Campo1"
            type="text"
          />
          <Input.Default
            title="Campo:"
            name="campo2"
            placeholder="Campo2"
            type="text"
          />
          <Button type="submit">ENVIAR</Button>
        </Form>
      </div>
      <div>
        <Button>TEXT BUTTON</Button>
      </div>
    </>
  );
};

export default Styleguide;
