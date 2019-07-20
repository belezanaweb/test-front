<template>
  <div class="cart-list">
    <cart-item 
      v-for="(item, key) in products" 
      :key="key"
      :item="item.product"
    ></cart-item>
  </div>
</template>

<script>
import CartItem from './CartItem'

export default {
  name: 'cart-list',
  props: {
    products: Array
  },
  components: {
    CartItem,
  }
}
</script>

<style lang="stylus">
.cart-list 
  background #fff
  padding 13px

.cart-item + .cart-item 
  margin-top 15px
</style>
