import React from 'react'

import Form, { FormBuilder } from '.'
import { fields } from './data'

export default {
  title: 'Components/Form',
  component: Form
}

export const Default: React.FC<{}> = () => (
  <Form onSubmit={() => console.log('submit')} initialValues={{}}>
    <input name="test" />
  </Form>
)

export const Builder = () => (
  <FormBuilder onSubmit={() => console.log('submit')} fieldsList={fields}></FormBuilder>
)
