<template>
  <div id="app">
    <steps :items="checkoutSteps"></steps>
    <section class="container">
      <router-view class="router-view"/>
      <section class="summary-container">
        <checkout-summary :summary="checkoutSummary"></checkout-summary>
        <checkout-buttons></checkout-buttons>
      </section>
    </section>
    <moon-loader class="spinner" :loading="showSpinner" :color="'#fff'"></moon-loader>
  </div>
</template>

<script>
import Steps from './components/Steps'
import Card from './components/ui/Card'
import CheckoutButton from './components/CheckoutButton'
import CheckoutSummary from './components/CheckoutSummary'
import CheckoutButtons from './components/CheckoutButtons'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'

import { mapState, mapGetters } from "vuex"

export default {
  name: 'App',
  components: {
    Steps,
    Card,
    CheckoutButton,
    CheckoutSummary,
    CheckoutButtons,
    MoonLoader
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
      showSpinner: false
    }
  },
  computed: {
    ...mapGetters(['checkoutSummary'])
  },
  async created() {
    this.$eventBus.$on('loading', ({ loading }) => {
      this.showSpinner = loading
    })
    
    this.showSpinner = true
    await this.$store.dispatch('GET_CART')
    this.showSpinner = false
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
      margin 50px 200px 20px 200px
      border-radius 3px
      padding 0px 20px 40px 20px

    .router-view 
      flex 1
      padding 0px

    .summary-container
      margin-top 67px
      min-width 360px

    .confirmation
      margin-top 50px

      + .summary-container
        margin-top 117px

    .confirmation-message
      position absolute
      left 0
      right 0
      top 5rem

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

.summary-container   
  padding 13px 
  padding-top 7px

.checkout-button 
  margin-top 20px

.spinner
  top: 0;
  display: flex;
  justify-content: center;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  align-items: center;
  background #0000006b
</style>
