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
.steps 
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  padding 15px 10px

ul 
  display flex
  list-style none
  margin 0
  padding 0
  justify-content space-around
  font-weight bold
  text-transform uppercase
  font-size 13px
  color #CCC

li.router-link-exact-active 
  color #FF7800
</style>
