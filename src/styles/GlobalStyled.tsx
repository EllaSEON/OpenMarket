import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
    :root {
    --main-color:#21BF48;
    --main-disabled-color:#C4C4C4;
    --main-text-color:#ffffff;
    --sub-text-color:#767676;
  }
  html {
    font-size: 10px;
  }

  body {
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-weight: 400;
  }

  * {
    box-sizing: border-box;
  }
  
  button{
    background: inherit;
    border:none;
    box-shadow:none;
    border-radius:0;
    padding:0;
    overflow:visible;
    cursor:pointer;
    font: inherit;
    
  }
  a {
    color: #fff; 
    text-decoration: none; 
    outline: none
  }
  .hidden {
    position: absolute;
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;
