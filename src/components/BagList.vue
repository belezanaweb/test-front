<template>
  <div class="bag-list">
    <bag-item 
      v-for="(product, key) in products" 
      :key="key"
      :item="product"
    ></bag-item>
  </div>
</template>

<script>
import BagItem from './BagItem'

export default {
  name: 'bag-list',
  props: {
    products: Array
  },
  components: {
    BagItem,
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="stylus">
.bag-list 
  background #fff
  padding 13px

.bag-item + .bag-item 
  margin-top 15px
</style>
