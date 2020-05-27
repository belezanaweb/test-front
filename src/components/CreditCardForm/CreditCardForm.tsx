import React, { useContext } from 'react';
import { Controller } from 'react-hook-form';
import styled from 'styled-components';

import Box, { Grid } from '../Box';
import TextField from '../TextField';

import { CreditCardFormContext } from './CreditCardFormController';

const StyledForm = styled.div`
  flex: 1;
`;

const CreditCardForm = () => {
  const context = useContext(CreditCardFormContext);

  if (context === null) return null;

  const { control, errors } = context;

  function renderFieldNumber() {
    const mask = [/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];
    return (
      <Controller
        as={
          <TextField
            label="Número do Cartão:"
            mask={mask}
            error={errors.number && errors.number.message}
            placeholder="____.____.____.____"
          />
        }
        name="number"
        rules={{ required: "Numero do cartão obrigatório." }}
        control={control}
      />
    );
  }

  function renderFieldName() {
    return (
      <Controller
        as={
          <TextField
            label="Nome do Titular:"
            mask={false}
            error={errors.name && errors.name.message}
            placeholder="Como no cartão"
          />
        }
        name="name"
        rules={{ required: "Nome do titular obrigatório." }}
        control={control}
      />
    );
  }

  function renderFieldExpiringDate() {
    return (
      <Controller
        as={
          <TextField
            label="Validade (mês/ano):"
            mask={[/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
            error={errors.expiringDate && errors.expiringDate.message}
            placeholder="__/____"
          />
        }
        name="expiringDate"
        rules={{ required: "Validade do cartão obrigatório." }}
        control={control}
      />
    );
  }

  function renderFieldCodeVerification() {
    return (
      <Controller
        as={
          <TextField
            error={errors.code && errors.code.message}
            label="CVV:"
            mask={[/\d/, /\d/, /\d/]}
            placeholder="___"
          />
        }
        name="code"
        rules={{ required: "Codígo de verificação obrigatório." }}
        control={control}
      />
    );
  }

  return (
    <StyledForm>
      <Grid template="1fr" gap="25px" css={{ marginBottom: '25px' }}>
        <Box>
          {renderFieldNumber()}
        </Box>

        <Box>
          {renderFieldName()}
        </Box>
      </Grid>

      <Grid template="1.2fr 1fr" css={{ marginBottom: '15px' }}>
        <Box>
          {renderFieldExpiringDate()}
        </Box>
        <Box>
          {renderFieldCodeVerification()}
        </Box>
      </Grid>
    </StyledForm>
  );
};

export default CreditCardForm;
