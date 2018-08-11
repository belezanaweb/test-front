import { withFormik } from 'formik'
import { object, string } from 'yup'

export default withFormik({
  mapPropsToValues: () => ({
    card: '',
    name: '',
    expiration: '',
    code: ''
  }),
  handleSubmit: (values, { props: { updateCheckout, history } }) => {
    updateCheckout(values)
    history.push('/finish')
  },
  validationSchema: object().shape({
    card: string()
      .min(19)
      .max(19)
      .required(),
    name: string().required(),
    expiration: string()
      .min(7)
      .max(7)
      .required(),
    code: string()
      .min(3)
      .max(3)
      .required()
  })
})
