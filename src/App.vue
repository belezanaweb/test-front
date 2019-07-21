<template>
  <div id="app">
    <steps :items="checkoutSteps"></steps>
    <router-view class="router-view"/>
    <section class="resume-container">
      <checkout-resume :resume="checkoutResume"></checkout-resume>
      <checkout-button 
        v-if="$route.path === '/'" 
        to='/payment'
      >
        SEGUIR PARA O PAGAMENTO
      </checkout-button>
      <checkout-button 
        v-if="$route.path === '/payment'" 
        to='/confirmation'
        :disabled="!paymentFormIsValid"
      >
        FINALIZAR O PEDIDO
      </checkout-button>
    </section>
  </div>
</template>

<script>
import Steps from './components/Steps'
import Card from './components/ui/Card'
import CheckoutButton from './components/CheckoutButton'
import CheckoutResume from './components/CheckoutResume'

import { mapState, mapGetters } from "vuex"

export default {
  name: 'App',
  components: {
    Steps,
    Card,
    CheckoutButton,
    CheckoutResume
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
    ...mapState(['paymentFormIsValid']),
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

.resume-container   
  padding 13px 
  padding-top 7px

.checkout-button 
  margin-top 20px
</style>
