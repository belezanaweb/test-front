<template>
  <div class="form-input">
    <input :type="type" :name="name" :placeholder="placeholder"/>
  </div>
</template>

<script>
export default {
  name: 'form-input',
  props: {
    type: String,
    name: String,
    validation: String,
    placeholder: String
  }
}
</script>

<style lang="stylus" scoped>
input 
  box-sizing border-box
  height 45px
  width 100%
  border-radius 3px
  background-color #FFF
  border 1px solid #E7E7E7
  box-shadow inset 0 1px 2px 0 rgba(0, 0, 0, 0.2)

</style>
