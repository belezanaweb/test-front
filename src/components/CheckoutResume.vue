<template>
  <card class="checkout-resume" border>
    <ul>
      <li 
        v-for="(item, key) in items" 
        :key="key" 
        :class="{ discount: item.isDiscount }"
      >
        <span class="label">{{ item.label }}</span>
        <span class="value">{{ item.value }}</span>
      </li>
    </ul>
  </card>
</template>

<script>
import Card from './ui/Card'

export default {
  name: 'checkout-resume',
  props: {
    items: Array
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
