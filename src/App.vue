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

<script>
document.body.style.backgroundColor = '#eee';
</script>

<style lang="scss">
#app {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
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
  .card-body {
    padding: 0.5rem;
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
  .form {
    font-size: 0.7857rem;
    color: #ccc;
  }
  .form-control {
    &:focus {
      border-color: #a43287;
      box-shadow: none;
    }
  }
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #ccc;
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #ccc;
  }
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: #ccc;
  }
}
</style>
