import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import UserCard from "./UserCard";

const DefaultUsers = () => {
  const [defaultUsers, setDefaultUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all([
        fetchDefaultUser("ZJimFang"),
        fetchDefaultUser("mm7246591"),
      ]);
      setDefaultUsers(data);
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

  const userCard = [];
  defaultUsers.forEach((user) => {
    const { avatar_url, login, name, public_repos } = user;
    userCard.push(
      <UserCard
        avatar={avatar_url}
        name={name}
        userName={login}
        repos={public_repos}
        key={uuidv4()}
      />
    );
  });
  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>{userCard}</Grid>
      </Grid>
    </Box>
  );
};

export default DefaultUsers;
