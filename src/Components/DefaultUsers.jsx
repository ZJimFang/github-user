import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import UserCard from "./UserCard";

const DefaultUsers = () => {
  const defaultUsers = ["ZJimFang", "Tu-yunhsuan"];
  useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all([
        fetchDefaultUser("ZJimFang"),
        fetchDefaultUser("Tu-yunhsuan"),
      ]);
      console.log(data);
    };

    fetchData();
  }, []);

  const fetchDefaultUser = (userName) => {
    return fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => {
        const { avatar_url, login, name, public_repos, url } = data;
        return { avatar_url, login, name, public_repos, url };
      });
  };

  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <UserCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DefaultUsers;
