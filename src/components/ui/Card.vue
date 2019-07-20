<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'card',
}
</script>

<style lang="stylus">
.card
  border-radius 3px
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22)
</style>
