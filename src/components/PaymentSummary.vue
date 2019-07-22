<template>
  <card class="payment-summary" shadow>
    <ul>
      <li v-hide-digits>
        {{ summary.creditCardNumber }}
      </li>
      <li>
       {{ summary.holderName }}
      </li>
      <li>
       {{ summary.validity }}
      </li>
    </ul>
  </card>
</template>

<script>
import Card from './ui/Card'

export default {
  name: 'payment-summary',
  props: {
    summary: Object
  },
  components: {
    Card
  }
}
</script>

<style lang="stylus" scoped>
.payment-summary 
  background-color #fff
  padding 14px 10px 7px 10px

ul
  margin 0
  padding 0
  list-style none
  display flex
  flex-direction column

li
  display flex
  justify-content space-between
  text-transform uppercase
  color #000
  font-size 14px
  line-height 17px
</style>
