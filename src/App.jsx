/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Search from "./components/Search";
import "./style/App.scss";
import DefaultUsers from "./components/DefaultUsers";
const App = () => {
  return (
    <>
      <Search />
      <DefaultUsers />
    </>
  );
};

export default App;
