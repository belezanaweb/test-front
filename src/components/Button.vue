<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-md-6 offset-md-3">
        <button
          type="button"
          class="btn btn-lg btn-block btn-danger text-uppercase font-weight-bold mb-3 button"
          @click="$emit('click')"
        >
          {{ title }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
.button {
  padding: 1.071rem 0;
}
.btn-danger {
  background-color: #ff7800;
  border-color: #ff7800;
  &:hover {
    background-color: #d45a00;
    border-color: #d45a00;
  }
}
</style>
