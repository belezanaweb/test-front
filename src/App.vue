<template>
  <div id="app">
    <steps :items="checkoutSteps"></steps>
    <router-view class="router-view"/>

    <section class="resume-container">
      <card class="checkout-resume" border>
        <ul>
          <li>
            <span class="label">PRODUTOS</span>
            <span class="value"> R$ 624,80</span>
          </li>
          <li>
            <span class="label">PRODUTOS</span>
            <span class="value"> R$ 624,80</span>
          </li>
          <li class="discount">
            <span class="label">PRODUTOS</span>
            <span class="value"> R$ 624,80</span>
          </li>
          <li>
            <span class="label">TOTAL</span>
            <span class="value">R$ 600,10</span>
          </li>
        </ul>
      </card>
    </section>
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

.checkout-resume 
  font-size 14px

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

    &:last-child
      font-weight bold
      margin-top 11px

.discount
  color #FF7800

.resume-container   
  padding 13px 
</style>
