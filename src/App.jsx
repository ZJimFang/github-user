/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Search from "./components/Search";
import "./style/App.scss";
import DefaultUsers from "./components/DefaultUsers";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ["Mukta, sans-serif"].join(""),
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "95vw",
          height: "95vh",
          backgroundColor: "#353535",
          borderRadius: 5,
        }}
      >
        <Search />
        <DefaultUsers />
      </Box>
    </ThemeProvider>
  );
};

export default App;
