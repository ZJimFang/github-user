import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import User from "./components/User";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        {/* <Route exact path={`/users/${username}/repos`} element={<User />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
