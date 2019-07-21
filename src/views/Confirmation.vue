<template>
  <div class="confirmation">
    <h3>Pagamento</h3>
    <payment-resume :resume="payment"></payment-resume>

    <h3>Produtos</h3>
    <card shadow>
      <cart-list :products="cart.items" small></cart-list>
    </card>
  </div>
</template>

<script>
import CartList from '../components/CartList'
import Card from '../components/ui/Card'
import PaymentResume from '../components/PaymentResume'
import { mapState } from "vuex"

export default {
  name: 'confirmation',
  components: {
    CartList,
    Card,
    PaymentResume
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['payment', 'cart'])
  }
}
</script>

<style lang="stylus">
.card + .card
  margin-top 20px
</style>
