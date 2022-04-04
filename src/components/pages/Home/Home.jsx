import React, { useState } from "react";
import Nav from "../../public/Nav";
import DefaultUsers from "./DefaultUsers";
import UserCard from "../../public/UserCard";
import { v4 as uuidv4 } from "uuid";
import Typography from "@mui/material/Typography";
import { Grid } from "@material-ui/core";

const Home = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isConnect, setIsConnect] = useState(true);
  const isEmpty = Object.keys(userInfo).length === 0;
  return (
    <div className="container">
      <Nav setUserInfo={setUserInfo} setIsConnect={setIsConnect} />
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={3}
      >
        {isEmpty ? (
          <DefaultUsers />
        ) : (
          <Grid item key={uuidv4()}>
            {isConnect ? (
              <UserCard user={userInfo} />
            ) : (
              <Typography variant="h3" color="#CDD9E5">
                user not found
              </Typography>
            )}
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Home;
