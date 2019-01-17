<template>
  <div id="app">
    <b-nav>
      <b-nav-item active>
        <router-link to="/">
          Sacola
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/payment">
          Pagamento
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/success">
          Confirmação
        </router-link>
      </b-nav-item>
    </b-nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  background-color: #eee;
  color: #888;
  .nav {
    background-color: #fff;
    justify-content: center;
    a {
      font-weight: bold;
      color: #ccc;
      text-transform: uppercase;
      &.router-link-exact-active {
        color: #ff7800;
        &:hover {
          color:#ff7800;
        }
      }
      &:hover {
        color:#d45a00;
        text-decoration: none;
      }
    }
  }
  .no-gutters {
    margin-right: 0;
    margin-left: 0;

    > .col,
    > [class*="col-"] s{
      padding-right: 0;
      padding-left: 0;
    }
  }
}
</style>
