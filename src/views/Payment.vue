<template>
  <div class="cart">
    <h3>Cartão de crédito</h3>
    <card class="payment-form" shadow>
      <div class="input-container">
        <form-input 
          placeholder="____.____.____.____"
          label="Número do cartão:"
        ></form-input>
      </div>
      <div class="input-container">
        <form-input 
          label="Nome do Titular:"
          placeholder="____.____.____.____"
        ></form-input>
      </div>
      <div class="input-container form-group">
        <form-input 
          placeholder="____.____.____.____"
          label="Validade (mês/ano):"
        ></form-input>
        <form-input 
          label="CVV"
          placeholder="____.____.____.____"
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

.form-group 
  display flex
  justify-content space-between
</style>
