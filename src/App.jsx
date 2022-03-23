/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Search from "./components/public/Search";
import "./style/App.scss";
import DefaultUsers from "./components/public/DefaultUsers";
import UserCard from "./components/public/UserCard";
import { v4 as uuidv4 } from "uuid";
import { ThemeProvider, createTheme, Grid } from "@material-ui/core";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ["Mukta, sans-serif"].join(""),
    },
  },
});

const App = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isConnect, setIsConnect] = useState(true);
  const isEmpty = Object.keys(userInfo).length === 0;
  const id = uuidv4();
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Search setUserInfo={setUserInfo} setIsConnect={setIsConnect} />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          {isEmpty ? (
            <DefaultUsers />
          ) : isConnect ? (
            <Grid item key={id}>
              <UserCard user={userInfo} />
            </Grid>
          ) : (
            <Grid
              item
              sx={{
                color: "white",
              }}
            >
              user not found
            </Grid>
          )}
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default App;
