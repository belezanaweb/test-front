<template>
  <div>
    <p class="text-uppercase font-weight-bold mb-0 title">
      Cartão de Crédito
    </p>
    <b-card class="font-weight-bold mb-3 form">
      <b-form>
        <b-form-group
          label="Número do cartão:"
          label-for="cardNumber"
          invalid-feedback="Campo Obrigatório"
          state="invalid"
        >
          <b-form-input
            id="cardNumber"
            v-mask="'####.####.####.####'"
            type="text"
            required
            placeholder="____.____.____.____"
          />
        </b-form-group>
        <b-form-group
          label="Nome do Titular:"
          label-for="name"
          invalid-feedback="Campo Obrigatório"
          state="invalid"
        >
          <b-form-input
            id="name"
            type="text"
            required
            placeholder="Como no cartão"
          />
        </b-form-group>
        <b-form-row>
          <b-col cols="7">
            <b-form-group
              label="Validade (mês/ano):"
              label-for="dataCardValid"
              invalid-feedback="Campo Obrigatório"
              state="invalid"
            >
              <b-form-input
                id="dataCardValid"
                v-mask="'##/####'"
                type="text"
                required
                placeholder="__/____"
              />
            </b-form-group>
          </b-col>
          <b-col cols="5">
            <b-form-group
              label="CVV:"
              label-for="cvv"
              invalid-feedback="Campo Obrigatório"
              state="invalid"
            >
              <b-form-input
                id="cvv"
                v-mask="'###'"
                type="text"
                required
                placeholder="___"
              />
            </b-form-group>
          </b-col>
        </b-form-row>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask';

export default {
  name: 'CreditData',
  directives: { mask },
};
</script>
