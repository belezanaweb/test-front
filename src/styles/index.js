import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root{
  --color-background:#eee;
  --color-background-produtcs:#FFF;
  --color-font:#212122;
  --color-border-total:#ccc;
  --color-font-title: #999;
  --color-font-total-desc:#FF7800;
  --color-button:#FF6C00;
  --color-button-hover:#D45A00;
  --color-placeholder: #E0E7EE;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html,
  body, #root {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    height: 100vh;    
          
  }
  body{
    background:  var(--color-background);
  }
  #root {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
  
`;