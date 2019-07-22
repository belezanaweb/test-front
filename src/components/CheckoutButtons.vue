<template>
  <section class="checkout-buttons">
    <checkout-button 
      v-if="$route.path === '/'" 
      to='/payment'
    >
      SEGUIR PARA O PAGAMENTO
    </checkout-button>
    <checkout-button 
      v-if="$route.path === '/payment'" 
      :disabled="!paymentFormIsValid"
      @click.native="handlePayementClick"
    >
      FINALIZAR O PEDIDO
    </checkout-button>
  </section>
</template>

<script>
import CheckoutButton from './CheckoutButton'

import { mapState, mapGetters } from "vuex"

export default {
  name: 'checkout-buttons',
  components: {
    CheckoutButton,
  },
  computed: {
    ...mapState(['paymentFormIsValid']),
    ...mapGetters(['checkoutSummary'])
  },
  methods: {
    handlePayementClick() {
      this.$eventBus.$emit('finish-order')
    }
  }
}
</script>

<style lang="stylus">
.checkout-button 
  margin-top 20px
</style>
