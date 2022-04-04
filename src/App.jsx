/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core";
import Home from "./components/pages/Home/Home";

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
      <Home />
    </ThemeProvider>
  );
};

export default App;
