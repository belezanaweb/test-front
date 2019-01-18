<template>
  <div class="px-2">
    <Products />
    <Resume />
    <Button
      title="Seguir para o pagamento"
      @click="goNext"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import MockService from '@/services/mock';

import Products from '@/components/Products.vue';
import Resume from '@/components/Resume.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Cart',
  components: {
    Products,
    Resume,
    Button,
  },
  mounted() {
    this.getData();
  },
  methods: {
    ...mapActions('Cart', ['setCartData']),
    async getData() {
      const response = await MockService.getData({ data: '5b15c4923100004a006f3c07' });
      this.setCartData(response.data);
    },
    goNext() {
      this.$router.push('payment');
    },
  },
};
</script>
