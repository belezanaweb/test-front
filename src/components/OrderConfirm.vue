<template>
  <div>
    <div class="text-center my-2">
      <!-- eslint-disable -->
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve" width="40px" height="40px">
        <g>
          <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26   S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z" fill="#ff7800"/>
          <path d="M38.252,15.336l-15.369,17.29l-9.259-7.407c-0.43-0.345-1.061-0.274-1.405,0.156c-0.345,0.432-0.275,1.061,0.156,1.406   l10,8C22.559,34.928,22.78,35,23,35c0.276,0,0.551-0.114,0.748-0.336l16-18c0.367-0.412,0.33-1.045-0.083-1.411   C39.251,14.885,38.62,14.922,38.252,15.336z" fill="#ff7800"/>
        </g>
      </svg>
      <!-- Icons made by Smashicons from https://www.flaticon.com and is licensed by http://creativecommons.org/licenses/by/3.0/ -->
      <!-- eslint-enable -->
    </div>
    <p class="text-uppercase text-center font-weight-bold mb-2 msg">
      Compra efetuada com sucesso
    </p>
    <p class="text-uppercase font-weight-bold mb-0 title">
      Pagamento
    </p>
    <b-card>
      <ul class="pl-0 mb-0">
        <li>
          ****.****.****.1234
        </li>
        <li class="text-uppercase">
          José da Silva
        </li>
        <li>
          05/2019
        </li>
      </ul>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'OrderConfirm',
};
</script>

<style scoped lang="scss">
.msg {
  color: #ff7800;
}
ul {
  list-style-type: none;
}
</style>
