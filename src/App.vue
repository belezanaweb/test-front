<template>
  <div id="app">
    <steps :items="checkoutSteps"></steps>
    <section class="container">
      <router-view class="router-view"/>
      <section class="resume-container">
        <checkout-resume :resume="checkoutResume"></checkout-resume>
        <checkout-buttons></checkout-buttons>
      </section>
    </section>
  </div>
</template>

<script>
import Steps from './components/Steps'
import Card from './components/ui/Card'
import CheckoutButton from './components/CheckoutButton'
import CheckoutResume from './components/CheckoutResume'
import CheckoutButtons from './components/CheckoutButtons'

import { mapState, mapGetters } from "vuex"

export default {
  name: 'App',
  components: {
    Steps,
    Card,
    CheckoutButton,
    CheckoutResume,
    CheckoutButtons
  },
  data() {
    return {
      checkoutSteps: [
        { 
          label: 'Sacola',
          to: '/'
        },
        { 
          label: 'Pagamento',
          to: '/payment'
        },
        { 
          label: 'Confirmação',
          to: '/confirmation'
        }
      ],
    }
  },
  computed: {
    ...mapGetters(['checkoutResume'])
  },
  async created() {
    await this.$store.dispatch('GET_CART')
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Helvetica Neue', sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  background #EEE
  min-height 115vh

  @media screen and (min-width 1080px)
    display flex
    flex-direction column
    min-height 100vh

    .steps 
      flex 3
      max-height 20px
    
    .container 
      display flex
      padding 10px 200px

    .router-view 
      flex 1
      padding 0px

    .resume-container
      margin-top 67px
      min-width 360px

body 
  margin 0
  padding 0

.router-view 
  padding 0 13px 13px 13px 

h3 
  color #999
  font-size 14px
  text-transform uppercase
  margin 0
  padding 0
  margin-bottom 5px
  margin-left 11px
  margin-top 15px

  @media screen and (min-width 1080px)
    font-size 20px
    margin 30px 0px 20px

.resume-container   
  padding 13px 
  padding-top 7px

.checkout-button 
  margin-top 20px
</style>
