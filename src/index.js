import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import App from "./App";
import UserReposHome from "./components/UserReposHome";
import UserRepoPage from "./components/UserRepoPage";
import theme from "./modules/theme";
import "./style/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/users/:username/repos" element={<UserReposHome />} />
          <Route
            path="/users/:username/repos/:repo"
            element={<UserRepoPage />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
