<template>
  <div class="cart-item" :class="{ small: small }">
    <img 
      v-if="small" 
      width="42px" 
      height="42px" 
      class="item-image small" 
      :src="item.imageObjects[0].thumbnail"
    />
    <img 
      v-else
      width="65px" 
      height="65px" 
      class="item-image" 
      :src="item.imageObjects[0].small"
    />
    <img 
      class="item-image responsive" 
      :src="item.imageObjects[0].small"
    />
    <div class="info">
      <h4 class="item-name" v-excerpt="60">{{ item.name }}</h4>
      <span v-if="!small" class="item-price">{{ item.priceSpecification.price | currency }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart-item',
  props: {
    item: Object,
    small: Boolean
  }
}
</script>

<style lang="stylus">
.cart-item 
  border: 1px solid #EEE;
  padding 12px 10px 14px 6px
  border-radius 3px
  display flex

  &.small 
    max-height 36px

.info 
  display flex
  flex-direction column

.item-image 
  min-width 65px
  margin-right 11px

  &.small
    min-width 42px

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

.responsive
  display none

@media screen and (min-width 1080px)
  .cart-item
    padding 10px 10px 10px 0px
    .info 
      width 100%
      margin-top 20px
    
    &.small
      max-height 100px
  
  .item-image
    display none
    min-width auto
  
  .responsive
    display block

  .item-name
    font-size 0.875rem
  
  .item-price
    align-self flex-start
</style>
