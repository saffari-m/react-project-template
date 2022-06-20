import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Yekan-Bakh-FaN-Regular";
    font-style: normal;
    font-weight: 400;    
    src: url("/font/Yekan-Bakh-FaN-Regular.woff") format("woff");
    font-display: swap;
  }
  @font-face {
    font-family: "Yekan-Bakh-FaN-Medium";
    font-style: normal;
    font-weight: 400;
    src: url("/font/Yekan-Bakh-FaN-Medium.woff") format("woff");
    font-display: swap;
  }
  @font-face {
    font-family: "Yekan-Bakh-En-Medium";
    font-style: normal;
    font-weight: 400;
    src: url("/font/Yekan-Bakh-En-Medium.woff") format("woff");
    font-display: swap;
  }
  body {
    font-size: 16px;
    line-height: 2;
    font-family:  Yekan-Bakh-FaN-Regular;
    margin: 0;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;      
    background-color: ${({ theme }) => theme?.style?.background?.primary};
    color: ${({ theme }) => theme?.style?.text?.primary};
    direction:rtl;
    min-height:100vh;
  }
  h1,h2,h3,h4,h5{
    margin: 0;
    padding:0;
  }  
  input,textarea,button{
    font-family:  Yekan-Bakh-FaN-Regular;
  }
  `;
export default GlobalStyles;
