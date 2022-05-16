import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#83314E",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
