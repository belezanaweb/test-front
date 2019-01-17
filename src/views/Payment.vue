<template>
  <div class="px-2">
    <CreditData />
    <Resume />
    <Button
      title="Finalizar o pedido"
      @click="goNext"
    />
  </div>
</template>

<script>
import CreditData from '@/components/CreditData.vue';
import Resume from '@/components/Resume.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Payment',
  components: {
    CreditData,
    Resume,
    Button,
  },
  methods: {
    goNext() {
      this.$router.push('success');
    },
  },
};
</script>
