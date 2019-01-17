<template>
  <div class="resume">
    <b-card class="mb-3">
      <div class="col-xs-12 col-md-4 offset-md-4 px-1">
        <div class="row no-gutters justify-content-between">
          <div class="col-6">
            Produtos
          </div>
          <div class="col-6 text-right">
            bb
          </div>
        </div>
        <div class="row no-gutters justify-content-between">
          <div class="col-6">
            Frete
          </div>
          <div class="col-6 text-right">
            bb
          </div>
        </div>
        <div class="row no-gutters justify-content-between discount">
          <div class="col-6">
            Desconto
          </div>
          <div class="col-6 text-right">
            bb
          </div>
        </div>
        <div class="w-100 d-block mb-2" />
        <div class="row no-gutters font-weight-bold justify-content-between">
          <div class="col-6">
            Total
          </div>
          <div class="col-6 text-right">
            bb
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Resume',
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
