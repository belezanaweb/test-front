<template>
  <card class="payment-resume" shadow>
    <ul>
      <li v-hide-digits>
        {{ resume.creditCardNumber }}
      </li>
      <li>
       {{ resume.holderName }}
      </li>
      <li>
       {{ resume.validity }}
      </li>
    </ul>
  </card>
</template>

<script>
import Card from './ui/Card'

export default {
  name: 'payment-resume',
  props: {
    resume: Object
  },
  components: {
    Card
  }
}
</script>

<style lang="stylus" scoped>
.payment-resume 
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
