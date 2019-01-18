<template>
  <div>
    <Title
      title="Produtos"
      class="mb-0"
    />
    <b-card-group
      class="mb-3 list"
      deck
    >
      <b-card
        v-for="(data, index) in products"
        :key="index"
      >
        <b-row class="no-gutters">
          <b-col
            cols="2"
            align-self="center"
          >
            <b-img
              :src="data.product.imageObjects[0].thumbnail"
              fluid
              alt="Responsive image"
            />
          </b-col>
          <b-col
            cols="10"
            class="d-flex flex-column"
          >
            <b-row class="ml-1 no-gutters ">
              <b-col cols="12">
                {{ data.product.name }}
              </b-col>
            </b-row>
            <b-row
              align-v="end"
              class="no-gutters ml-1 price"
            >
              <b-col
                cols="12"
                class="text-right font-weight-bold"
              >
                {{ data.product.priceSpecification.price | currency }}
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Title from '@/components/Title.vue';

export default {
  name: 'Products',
  components: { Title },
  computed: {
    ...mapGetters('Cart', ['products']),
  },
};
</script>

<style scoped lang="scss">
.card-deck {
  background-color: #fff;
  border: 0.07143rem solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0.1429rem 0.1429rem 0.1429rem rgba(0,0,0,0.2);
  padding: 0.7143rem;
  .card:last-child {
    margin-bottom: 0;
  }
}
.price {
  flex-basis: inherit;
  color: #000;
}
</style>
