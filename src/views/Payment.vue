<template>
  <div class="cart">
    <h3>Cartão de crédito</h3>
    <card class="payment-form" shadow>
      <ValidationObserver tag="form" ref="observer" v-slot="{ valid }">
        <div class="input-container">
          <form-input 
            type="credit_card"
            label="Número do cartão:"
            name="credit_card"
            v-validate="'required|credit_card'"
            v-model="payment.creditCardNumber"
          ></form-input>
        </div>
        
        <div class="input-container">
          <form-input 
            type="name"
            label="Nome do Titular:"
            placeholder="Como no cartão"
            name="titular_name"
            v-validate="'required|alpha'"
            v-model="payment.titularName"
          ></form-input>
        </div>

        <div class="input-container form-group">
          <form-input 
            type="validity"
            label="Validade (mês/ano):"
            name="card_validity"
            v-validate="'required|date_format:MM/yyyy'"
            v-model="payment.validity"
          ></form-input>
          <form-input 
            type="cvv"
            label="CVV:"
            name="card_cvv"
            class="credit-card-cvv"
            v-validate="'required|numeric|digits:3'"
            v-model="payment.cvv"
          ></form-input>
        </div>
      </ValidationObserver>
    </card>
  </div>
</template>

<script>
import CartList from '../components/CartList'
import Card from '../components/ui/Card'
import FormInput from '../components/ui/FormInput'
import { mapState } from "vuex";

import { ValidationObserver } from 'vee-validate'

export default {
  name: 'cart',
  components: {
    CartList,
    Card,
    FormInput,
    ValidationObserver
  },
  data() {
    return {
      payment: {
        creditCardNumber: null,
        cvv: null,
        validity: null,
        titularName: null,
      }
    }
  },
  computed: {
    ...mapState(['cart'])
  },
  methods: {
    submit(a) {
      this.$validator.validate().then((valid) => {
        console.log(valid)
      })
    }
  }
}
</script>

<style lang="stylus">
.card + .card
  margin-top 20px

.payment-form 
  background #fff
  padding 13px
  padding-bottom 25px

.input-container + .input-container
  margin-top 25px

.form-input + .form-input
  margin-left 20px

.form-group 
  display flex
  justify-content space-between

.credit-card-cvv
  width 230px
</style>
