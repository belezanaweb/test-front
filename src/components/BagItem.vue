<template>
  <div class="bag-item">
    {{ item }}
  </div>
</template>

<script>
export default {
  name: 'bag-item',
  props: {
    item: Object
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="stylus">
.bag-item 
  border 1px solid #ddd
  padding 12px 10px 14px 10px
  border-radius 3px
</style>
