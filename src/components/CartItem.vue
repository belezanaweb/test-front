<template>
  <div class="cart-item">
    <img width="65px" height="65px" class="item-image" :src="item.imageObjects[0].small"/>
    <div class="info">
      <h4 class="item-name" v-excerpt="60">{{ item.name }}</h4>
      <span class="item-price">{{ item.priceSpecification.price | currency }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart-item',
  props: {
    item: Object
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="stylus">
.cart-item 
  border: 1px solid #EEE;
  padding 12px 10px 14px 6px
  border-radius 3px
  display flex

.info 
  display flex
  flex-direction column

.item-image 
  margin-right 11px

.item-name 
  color #212122
  font-size 13px
  font-weight 400
  margin 0
  padding 0
  margin-bottom 15px

.item-price
  color: #212122
  font-size 14px
  font-weight bold
  align-self flex-end
</style>
