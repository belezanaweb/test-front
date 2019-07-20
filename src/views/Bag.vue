<template>
  <div class="bag">
    <h3>Produtos</h3>
    <bag-list :products="productsInBag"></bag-list>
  </div>
</template>

<script>
import BagList from '../components/BagList'

export default {
  name: 'bag',
  components: {
    BagList
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
</style>
