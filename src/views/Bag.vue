<template>
  <div class="bag">
    <h3>Produtos</h3>
    <card shadow>
      <bag-list :products="productsInBag"></bag-list>
    </card>

    <card border>
    </card>
  </div>
</template>

<script>
import BagList from '../components/BagList'
import Card from '../components/ui/Card'

export default {
  name: 'bag',
  components: {
    BagList,
    Card
  },
  data() {
    return {
      productsInBag: [
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
