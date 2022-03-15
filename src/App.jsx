/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Search from "./components/Search";
import "./style/App.scss";
import DefaultUsers from "./components/DefaultUsers";
import UserCard from "./components/UserCard";
import { v4 as uuidv4 } from "uuid";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ["Mukta, sans-serif"].join(""),
    },
  },
});

const Container = styled("div")({
  width: "95vw",
  height: "95vh",
  backgroundColor: "#353535",
  borderRadius: 5,
  overflow: "scroll",
});

const App = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isConnect, setIsConnect] = useState(true);
  const isEmpty = Object.keys(userInfo).length === 0;
  const id = uuidv4();
  return (
    <ThemeProvider theme={theme}>
      <Container>
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
      </Container>
    </ThemeProvider>
  );
};

export default App;
