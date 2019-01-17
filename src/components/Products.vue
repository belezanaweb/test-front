<template>
  <div class="products">
    <p class="font-weight-bold mb-0 title">
      Produtos
    </p>
    <b-card-group
      class="mb-3 list"
      deck
    >
      <b-card>
        <div class="row no-gutters">
          <div class="col-2 align-self-center">
            <b-img
              src="https://picsum.photos/200/200?image=24"
              fluid
              alt="Responsive image"
            />
          </div>
          <div class="col-10 d-flex flex-column">
            <div class="row ml-1 no-gutters">
              <div class="col-12 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div class="row align-items-end no-gutters ml-1 price">
              <div class="col-12 text-right font-weight-bold">
                R$ 225,90
              </div>
            </div>
          </div>
        </div>
      </b-card>
      <b-card>
        <div class="row no-gutters">
          <div class="col-2 align-self-center">
            <b-img
              src="https://picsum.photos/200/200?image=24"
              fluid
              alt="Responsive image"
            />
          </div>
          <div class="col-10 d-flex flex-column">
            <div class="row ml-1 no-gutters">
              <div class="col-12 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div class="row align-items-end no-gutters ml-1 price">
              <div class="col-12 text-right font-weight-bold">
                R$ 225,90
              </div>
            </div>
          </div>
        </div>
      </b-card>
      <b-card>
        <div class="row no-gutters">
          <div class="col-2 align-self-center">
            <b-img
              src="https://picsum.photos/200/200?image=24"
              fluid
              alt="Responsive image"
            />
          </div>
          <div class="col-10 d-flex flex-column">
            <div class="row ml-1 no-gutters">
              <div class="col-12 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div class="row align-items-end no-gutters ml-1 price">
              <div class="col-12 text-right font-weight-bold">
                R$ 225,90
              </div>
            </div>
          </div>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'Cart',
};
</script>

<style scoped lang="scss">
.title {
  padding: 0.3571rem 0 0.1429rem 1rem;
  color: #999;
}
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
.list {
  .card-body {
    text-transform: capitalize;
  }
}
.card-body {
  padding: 0.5rem;
}
.price {
  flex-basis: inherit;
  color: #000;
}
</style>
