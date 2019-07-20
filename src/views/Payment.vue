<template>
  <div class="cart">
    <h3>Cartão de crédito</h3>
    <card shadow>
      
    </card>
  </div>
</template>

<script>
import CartList from '../components/CartList'
import Card from '../components/ui/Card'
import { mapState } from "vuex";

export default {
  name: 'cart',
  components: {
    CartList,
    Card
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
</style>
