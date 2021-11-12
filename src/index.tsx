import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { MainRouter } from "./mainRouter";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainRouter />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  </RecoilRoot>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
