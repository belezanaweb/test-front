<template>
  <p
    :class="{ pd: padding }"
    :style="{ color }"
    class="text-uppercase font-weight-bold"
  >
    {{ title }}
  </p>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#999',
    },
    padding: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped lang="scss">
.pd {
  padding: 0.3571rem 0 0.1429rem 1rem;
}
</style>
