<template>
  <div class="bag">
  </div>
</template>

<script>
export default {
  name: 'bag',
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
</style>
