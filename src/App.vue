<template>
  <div id="app">
    <steps :items="checkoutSteps"></steps>
    <router-view class="router-view"/>

    <section class="resume-container">
      <checkout-resume :items="checkoutResumeItems"></checkout-resume>
      <checkout-button to='/'>SEGUIR PARA O PAGAMENTO</checkout-button>
    </section>
  </div>
</template>

<script>
import Steps from './components/Steps'
import Card from './components/ui/Card'
import CheckoutButton from './components/CheckoutButton'
import CheckoutResume from './components/CheckoutResume'

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
          to: '/confimation'
        }
      ],
      checkoutResumeItems: [
        {
          label: 'A',
          value: 123
        },
        {
          label: 'A',
          value: 123
        },
        {
          label: 'A',
          value: 123
        },
        {
          label: 'A',
          value: 123
        }
      ]
    }
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
  min-height 100vh

body 
  margin 0
  padding 0

.router-view 
  padding 13px 

h3 
  color #999
  font-size 14px
  text-transform uppercase
  margin 0
  padding 0
  margin-bottom 5px
  margin-left 11px

.resume-container   
  padding 13px 
  padding-top 7px

.checkout-button 
  margin-top 20px
</style>
