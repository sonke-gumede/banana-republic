import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Nimbus-san;
    src: url("src/assets/fonts/nimbus-sans-l.regular.otf") format("woff");
  }

  p {
    font-size: 20px;
    line-height: 1.6em;
  }
  body, html {
    font-family: Nimbus-san;
    background-color: ${(props) => props.theme.colors.cloudyBlue};
    color: ${(props) => props.theme.colors.charcoalGrey};
    margin: 0;
    place-items: center;
    min-height: 100vh;
  }
  `;

export default GlobalStyle;
