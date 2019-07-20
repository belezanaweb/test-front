<template>
  <div id="app">
    <steps :items="checkoutSteps"></steps>
    <router-view/>
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
          to: '/'
        },
        { 
          label: 'Confirmação',
          to: '/'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>
