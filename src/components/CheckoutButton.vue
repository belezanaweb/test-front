<template>
  <div class="checkout-button">
    <router-link tag="button" :to="to">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'checkout-button',
  props: {
    to: {
      type: String,
      required: true
    } 
  }
}
</script>

<style lang="stylus">
button
  height 60px
  width 100%
  border-radius 3px
  background-color #FF6C00
  box-shadow inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25)
  color #FFF
  font-size 20px
  font-weight 700
  letter-spacing 0.5px
  line-height 24px
  text-align center
</style>
