/**
 * Dependencies
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'

/*** Resources*/
import { paymentActions } from './payment.actions'
import { getInitialValues, getValidationSchemas } from '../../services/handleForm'
import { formFields } from '../../services/paymentFormFields'

/*** Components*/
import InfoComponent from '../bag/components/info.component'
import { Paper, Grid, TextField, Typography, Button } from '@material-ui/core'

class PaymentContainer extends Component {
  componentDidMount() {
    if (!Object.keys(this.props.bag).length) {
      this.props.history.push('/')
    }
  }

  CustomInputComponent = ({ field, form: { touched, errors }, ...props }) => (
    <div>
      <TextField
        component="div"
        {...field}
        {...props}
        margin="normal"
        variant="outlined"
        error={Boolean(touched[field.name] && errors[field.name])}
      />
      {touched[field.name] && errors[field.name] && (
        <Typography variant="caption" className="error" style={{ opacity: 0.6 }}>
          {errors[field.name]}
        </Typography>
      )}
    </div>
  )

  render() {
    const { bag, history, ADD } = this.props

    return (
      <div style={{ padding: 10 }}>
        {Object.keys(bag).length && (
          <div>
            <Typography style={{ paddingLeft: 10 }}>CARTÃO DE CRÉDITO</Typography>

            <Formik
              initialValues={getInitialValues(formFields())}
              validationSchema={getValidationSchemas(formFields())}
              onSubmit={(values) => ADD(values).then(() => history.push('/confirm'))}
              render={({ errors, touched }) => (
                <Form>
                  <Paper elevation={4} style={{ padding: 10 }}>
                    <Grid container justify="space-between" direction="row" alignItems="center">
                      {formFields().map(field => (
                        <Grid
                          key={field.name}
                          item
                          xs={field.size}
                          sm={field.size}
                          md={field.size}
                          lg={field.size}
                          xl={field.size}
                        >
                          <Field
                            type={field.type}
                            name={field.name}
                            label={field.label}
                            fullWidth={field.fullWidth}
                            placeholder={field.label}
                            component={this.CustomInputComponent}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>

                  <InfoComponent info={this.props.bag} />

                  <Button
                    href=""
                    type="submit"
                    disabled={Boolean(
                      !Object.entries(touched).length && Object.entries(errors).length
                    )}
                    variant="contained"
                    style={{
                      margin: '10px 0',
                      width: '100%',
                      padding: 10,
                      backgroundColor: Boolean(
                        Object.entries(touched).length && !Object.entries(errors).length
                      )
                        ? '#FF7800'
                        : '#757575',
                      color: '#fff',
                      fontWeight: 'bold'
                    }}
                  >
                    Finalizar o Pedido
                  </Button>
                </Form>
              )}
            />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => bindActionCreators(paymentActions, dispatch)

PaymentContainer.propTypes = {
  bag: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PaymentContainer))
