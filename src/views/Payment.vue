<template>
  <div class="cart">
    <h3>Cartão de crédito</h3>
    <card class="payment-form" shadow>
      <div class="input-container">
        <form-input 
          type="credit_card"
          label="Número do cartão:"
          name="credit_card"
        ></form-input>
      </div>
      <div class="input-container">
        <form-input 
          label="Nome do Titular:"
          placeholder="Como no cartão"
          name="titular_name"
          validation="required"
        ></form-input>
      </div>
      <div class="input-container form-group">
        <form-input 
          type="validity"
          label="Validade (mês/ano):"
          name="card_validity"
        ></form-input>
        <form-input 
          type="cvv"
          label="CVV:"
          name="card_cvv"
        ></form-input>
      </div>
    </card>
  </div>
</template>

<script>
import CartList from '../components/CartList'
import Card from '../components/ui/Card'
import FormInput from '../components/ui/FormInput'
import { mapState } from "vuex";

export default {
  name: 'cart',
  components: {
    CartList,
    Card,
    FormInput
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['cart'])
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
</style>
