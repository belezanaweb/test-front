<template>
  <div class="px-2">
    <CreditData />
    <Resume />
    <Button
      title="Finalizar o pedido"
      :disable="disable"
      @click="goNext"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters('Payment', ['disable']),
  },
  methods: {
    goNext() {
      this.$router.push('success');
    },
  },
};
</script>
