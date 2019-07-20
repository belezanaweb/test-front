<template>
  <div class="cart">
    <h3>Produtos</h3>
    <card shadow>
      <cart-list :products="productsInCart"></cart-list>
    </card>
  </div>
</template>

<script>
import CartList from '../components/CartList'
import Card from '../components/ui/Card'

export default {
  name: 'cart',
  components: {
    CartList,
    Card
  },
  data() {
    return {
      productsInCart: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.card + .card
  margin-top 20px
</style>
