<template>
  <card class="checkout-resume" border>
    <ul>
      <li>
        <span class="label">PRODUTOS</span>
        <span class="value">{{ resume.subTotal | currency }}</span>
      </li>
      <li>
        <span class="label">FRETE</span>
        <span class="value">{{ resume.shippingTotal | currency }}</span>
      </li>
      <li class="discount">
        <span class="label">DESCONTO</span>
        <span class="value">- {{ resume.discount | currency }}</span>
      </li>
      <li>
        <span class="label">TOTAL</span>
        <span class="value">{{ resume.total | currency }}</span>
      </li>
    </ul>
  </card>
</template>

<script>
import Card from './ui/Card'

export default {
  name: 'checkout-resume',
  props: {
    resume: Object
  },
  components: {
    Card
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.checkout-resume 
  font-size 14px
  padding 13px

ul
  margin 0
  padding 0
  list-style none
  display flex
  flex-direction column

li
  display flex
  justify-content space-between
  padding 4px 0px
  text-transform uppercase
  color #212122

  &:last-child
    font-weight bold
    margin-top 11px

  &.discount
    color #FF7800
</style>
