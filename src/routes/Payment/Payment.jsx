import { Col, Form, Row } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import parse from 'date-fns/parse';
import isValid from 'date-fns/isValid';
import valid from 'card-validator';
import * as yup from 'yup';
import clsx from 'clsx';

import Button from 'components/Button';
import Card from 'components/Card';
import TotalPriceSummary from 'components/TotalPriceSummary';

import useStyles from './useStyles';

const schema = yup
  .object({
    cardNumber: yup
      .string()
      .required('Campo obrigatório')
      .test('test-cc', 'Número de cartão inválido', (value) => valid.number(value).isValid),
    name: yup.string().required('Campo obrigatório'),
    date: yup
      .string()
      .required('Campo obrigatório')
      .test('test-invalid', 'Data inválida', (value) =>
        isValid(parse(value, 'MM/yyyy', new Date()))
      )
      .test('test-expired', 'Cartão expirado', (value) => {
        const parsedValue = parse(value, 'MM/yyyy', new Date());

        console.log(parsedValue < new Date('01/01/1960'));

        return parsedValue > new Date();
      })
      .typeError('Data inválida ou cartão expirado'),
    cvv: yup.string().required('Campo obrigatório')
  })
  .required();

const Payment = () => {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  const onSubmit = (data) => {};

  return (
    <div>
      <p className={classes.title}>CARTÃO DE CRÉDITO</p>
      <Form validated={false} className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Card className={classes.card}>
          <Form.Group className="mb-4" controlId="cardNumber">
            <Form.Label className={classes.label}>Número do cartão:</Form.Label>
            <Form.Control
              className={classes.input}
              placeholder="____.____.____.____"
              type="tel"
              inputMode="numeric"
              autoComplete="cc-number"
              maxLength="16"
              isInvalid={errors.cardNumber}
              {...register('cardNumber', { required: true })}
            />
            {errors.cardNumber && (
              <Form.Text className={classes.errorText}>{errors.cardNumber.message}</Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-4" controlId="name">
            <Form.Label className={classes.label}>Nome do Titular:</Form.Label>
            <Form.Control
              className={classes.input}
              placeholder="Como no cartão"
              type="text"
              inputMode="text"
              autoComplete="cc-number"
              maxLength="140"
              isInvalid={errors.cardNumber}
              {...register('name', { required: true })}
            />
            {errors.name && (
              <Form.Text className={classes.errorText}>
                {watch('cardNumber') === '' ? 'Campo obrigatório' : 'Número de cartão inválido'}
              </Form.Text>
            )}
          </Form.Group>
          <Row>
            <Col>
              <Form.Group controlId="date">
                <Form.Label className={classes.label}>Validade(mês/ano):</Form.Label>
                <Controller
                  name="date"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field: { onChange, value, ...field }, formState }) => (
                    <>
                      <Form.Control
                        className={classes.input}
                        value={value}
                        placeholder="__/____"
                        type="text"
                        inputMode="numeric"
                        maxLength={7}
                        isInvalid={formState.errors.date}
                        onChange={({ target: { value } }) => {
                          onChange(
                            value
                              .replace(/\D/g, '')
                              .replace(/^(\d{2})(\d)$/, '$1/$2')
                              .replace(/^(\d{2})(\d{2})$/, '$1/$2')
                              .replace(/^(\d{2})(\d{3})$/, '$1/$2')
                              .replace(/^(\d{2})(\d{4})$/, '$1/$2')
                          );
                        }}
                        {...field}
                      />
                      {formState.errors.date && (
                        <Form.Text className={classes.errorText}>
                          {formState.errors.date.message}
                        </Form.Text>
                      )}
                    </>
                  )}
                />
              </Form.Group>
            </Col>
            <Col xs={5}>
              <Form.Group controlId="cvv">
                <Form.Label className={classes.label}>CVV:</Form.Label>
                <Controller
                  name="cvv"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field: { onChange, value, ...field }, formState: { errors } }) => (
                    <>
                      <Form.Control
                        className={clsx(classes.input, classes.cvv)}
                        value={value}
                        placeholder="_ _ _"
                        type="text"
                        inputMode="numeric"
                        maxLength={5}
                        isInvalid={errors.cvv}
                        onChange={({ target: { value } }) => {
                          onChange(
                            value
                              .replace(/\D/g, '')
                              .replace(/^(\d)(\d)$/, '$1 $2')
                              .replace(/^(\d)(\d)(\d)$/, '$1 $2 $3')
                          );
                        }}
                        {...field}
                      />
                      {errors.cvv && (
                        <Form.Text className={classes.errorText}>{errors.cvv.message}</Form.Text>
                      )}
                    </>
                  )}
                />
              </Form.Group>
            </Col>
          </Row>
        </Card>

        <TotalPriceSummary />

        <Button type="submit">FINALIZAR O PEDIDO</Button>
      </Form>
    </div>
  );
};

export default Payment;
