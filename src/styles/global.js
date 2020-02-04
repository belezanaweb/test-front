import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:0;
}

html, body, #root{
  min-height:100%;
  background:#EEEEEE;
}

body{
  -webkit-font-smoothing: antialiased !important;
  font-family: "Helvetica Neue", Helvetica, Arial,  sans-serif;
}

ul{
  list-style:none;
}

a{
  text-decoration:none;
}

.active{
  color: #FF7800!important;
}

form{
  input:focus{
    border: solid 1px purple;
  }
  
}

`;
