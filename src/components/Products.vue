<template>
  <div>
    <p class="text-uppercase font-weight-bold mb-0 title">
      Produtos
    </p>
    <b-card-group
      class="mb-3 list"
      deck
    >
      <b-card>
        <b-row class="no-gutters">
          <b-col
            cols="2"
            align-self="center"
          >
            <b-img
              src="https://picsum.photos/200/200?image=24"
              fluid
              alt="Responsive image"
            />
          </b-col>
          <b-col
            cols="10"
            class="d-flex flex-column"
          >
            <b-row class="ml-1 no-gutters">
              <b-col
                cols="12"
                class="text-justify"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                R$ 225,90
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
      <b-card>
        <b-row class="no-gutters">
          <b-col
            cols="2"
            align-self="center"
          >
            <b-img
              src="https://picsum.photos/200/200?image=24"
              fluid
              alt="Responsive image"
            />
          </b-col>
          <b-col
            cols="10"
            class="d-flex flex-column"
          >
            <b-row class="ml-1 no-gutters">
              <b-col
                cols="12"
                class="text-justify"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                R$ 225,90
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
      <b-card>
        <b-row class="no-gutters">
          <b-col
            cols="2"
            align-self="center"
          >
            <b-img
              src="https://picsum.photos/200/200?image=24"
              fluid
              alt="Responsive image"
            />
          </b-col>
          <b-col
            cols="10"
            class="d-flex flex-column"
          >
            <b-row class="ml-1 no-gutters">
              <b-col
                cols="12"
                class="text-justify"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                R$ 225,90
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'Products',
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
