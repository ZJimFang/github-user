import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import UserReposHome from "./components/pages/UserRepos/UserReposHome";
import RepoPage from "./components/pages/Repo/RepoPage";
import Favorites from "./components/pages/Favorites/Favorites";
import Error from "./components/pages/error/Error.jsx";
import "./style/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/users/:username/repos" element={<UserReposHome />} />
        <Route path="/users/:username/repos/:repo" element={<RepoPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
