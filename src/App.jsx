/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Search from "./components/Search";
import "./style/App.scss";
import DefaultUsers from "./components/DefaultUsers";
import UserCard from "./components/UserCard";
import { v4 as uuidv4 } from "uuid";
import { Grid } from "@mui/material";
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
  const [userInfo, setUserInfo] = useState({});
  const isEmpty = Object.keys(userInfo).length === 0;
  const id = uuidv4();
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "95vw",
          height: "95vh",
          backgroundColor: "#353535",
          borderRadius: 5,
          overflow: "scroll",
        }}
      >
        <Search setUserInfo={setUserInfo} />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
          sx={{
            mt: 2,
          }}
        >
          {isEmpty ? (
            <DefaultUsers />
          ) : (
            <Grid item key={id}>
              <UserCard user={userInfo} />
            </Grid>
          )}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default App;
