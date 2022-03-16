import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import App from "./App";
import User from "./components/User";
import theme from "./theme";
import "./style/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/users/:username/repos" element={<User />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
