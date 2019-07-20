<template>
  <div class="card" :class="{ 'shadow': shadow, 'border': border }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    shadow: Boolean,
    border: Boolean
  }
}
</script>

<style lang="stylus">
.card
  border-radius 3px

  &.shadow
    box-shadow 1px 1px 5px 0 rgba(0, 0, 29, 0.22)
  
  &.border
    border 1px solid #CCC
</style>
