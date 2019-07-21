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
            mask="#### #### #### ####"
          ></form-input>
        </div>
        
        <div class="input-container">
          <form-input 
            type="name"
            label="Nome do Titular:"
            placeholder="Como no cartão"
            name="holder_name"
            v-validate="'required|alpha_spaces'"
            v-model="payment.holderName"
          ></form-input>
        </div>

        <div class="input-container form-group">
          <form-input 
            type="validity"
            label="Validade (mês/ano):"
            name="card_validity"
            v-validate="'required|date_format:MM/yyyy'"
            v-model="payment.validity"
            mask="##/####"
          ></form-input>
          <form-input 
            type="cvv"
            label="CVV:"
            name="card_cvv"
            class="credit-card-cvv"
            v-validate="'required|numeric|digits:3'"
            v-model="payment.cvv"
            mask="###"
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
import { mapState } from "vuex"

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
        holderName: null
      }
    }
  },
  created() {
    this.$store.dispatch('UPDATE_PAYMENT_FORM_VALIDATION', { isValid: false })
    this.$eventBus.$on('jump-to-confirmation', _ => {
      this.handleSubmit()
    })
  },
  mounted() {
    this.$watch(
      _ => this.$refs.observer.ctx.valid,
      isValid => {
        this.$store.dispatch('UPDATE_PAYMENT_FORM_VALIDATION', { isValid })
      }
    )
  },
  methods: {
    async handleSubmit() {
      const isValid = this.$validator.validate()
      
      if (isValid) {
        this.$eventBus.$emit('loading', { loading: true })
        this.$store.dispatch('UPDATE_PAYMENT', { payment: this.payment })

        setTimeout(() => {
          this.$router.push({ path: '/confirmation' })
          this.$eventBus.$emit('loading', { loading: false })
        }, 2000)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.card + .card
  margin-top 20px

.payment-form 
  background #fff
  padding 13px

.input-container + .input-container
  margin-top 10px

  @media screen and (min-width 1080px)
    margin-top 15px

.form-input + .form-input
  margin-left 20px

.form-group 
  display flex
  justify-content space-between

.credit-card-cvv
  min-width 140px

@media screen and (min-width 1080px)
  .form-group div
    width 50%
    max-width 50%
</style>
