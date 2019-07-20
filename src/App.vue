<template>
  <div id="app">
    <steps :items="checkoutSteps"></steps>
    <router-view class="router-view"/>
  </div>
</template>

<script>
import Steps from './components/Steps'

export default {
  name: 'App',
  components: {
    Steps
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
</style>
