import { withFormik } from 'formik'

export default withFormik({
  mapPropsToValues: () => ({
    card: '',
    name: '',
    expiration: '',
    code: ''
  })
})
