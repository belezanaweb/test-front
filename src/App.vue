<template>
  <div id="app">
    <steps :items="checkoutSteps"></steps>
    <router-view class="router-view"/>
    <card border>
    </card>
  </div>
</template>

<script>
import Steps from './components/Steps'
import Card from './components/ui/Card'

export default {
  name: 'App',
  components: {
    Steps,
    Card
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
</style>
