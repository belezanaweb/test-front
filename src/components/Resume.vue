<template>
  <div class="text-uppercase resume">
    <b-card class="mb-3">
      <b-col
        cols="12"
        md="4"
        offset-md="4"
        class="px-1"
      >
        <b-row class="no-gutters justify-content-between">
          <b-col cols="6">
            Produtos
          </b-col>
          <b-col
            cols="6"
            class="text-right"
          >
            {{ resume.subTotal | currency }}
          </b-col>
        </b-row>
        <b-row class="no-gutters justify-content-between">
          <b-col cols="6">
            Frete
          </b-col>
          <b-col
            cols="6"
            class="text-right"
          >
            {{ resume.shippingTotal | currency }}
          </b-col>
        </b-row>
        <b-row class="no-gutters justify-content-between discount">
          <b-col cols="6">
            Desconto
          </b-col>
          <b-col
            cols="6"
            class="text-right"
          >
            - {{ resume.discount | currency }}
          </b-col>
        </b-row>
        <div class="w-100 d-block mb-2" />
        <b-row class="no-gutters font-weight-bold justify-content-between">
          <b-col cols="6">
            Total
          </b-col>
          <b-col
            cols="6"
            class="text-right"
          >
            {{ resume.total | currency }}
          </b-col>
        </b-row>
      </b-col>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Resume',
  computed: {
    ...mapGetters('Cart', ['resume']),
  },
};
</script>

<style scoped lang="scss">
.card-body {
  padding: 0.5rem;
  background-color: #eee;
}
.resume {
  color: #000;
  .discount {
    color: #ff7800;
  }
}
</style>
