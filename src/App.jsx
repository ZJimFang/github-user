/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Search from "./components/Search";
import "./style/App.scss";
import DefaultUsers from "./components/DefaultUsers";
import { Box } from "@mui/material";
const App = () => {
  return (
    <Box
      sx={{
        width: "95vw",
        height: "95vh",
        backgroundColor: "rgba(32, 32, 32,0.5)",
        borderRadius: 5,
      }}
    >
      <Search />
      <DefaultUsers />
    </Box>
  );
};

export default App;
