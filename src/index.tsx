import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./theme/index.ts";
import Main from "./containers/Main";
import GlobalStyle from "./theme/globalStyle.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Main />
    </ThemeProvider>
  </React.StrictMode>
);
