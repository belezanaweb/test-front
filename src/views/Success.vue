<template>
  <div class="px-2">
    <OrderConfirm />
    <Products />
    <Resume />
  </div>
</template>

<script>
import OrderConfirm from '@/components/OrderConfirm.vue';
import Products from '@/components/Products.vue';
import Resume from '@/components/Resume.vue';

export default {
  name: 'Success',
  components: {
    OrderConfirm,
    Products,
    Resume,
  },
};
</script>
