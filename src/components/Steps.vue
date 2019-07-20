<template>
  <section class="steps">
    <ul>
      <router-link 
        tag="li" 
        v-for="(item, key) in items" 
        :key="key" 
        :to="item.to"
      >
        {{ item.label }}
      </router-link>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'steps',
  props: {
    items: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped lang="stylus">
ul 
  display flex
  list-style none
  margin 0
  padding 0
  justify-content space-around
  color #FF7800
  font-weight bold
  text-transform uppercase
  font-size 13px
</style>
