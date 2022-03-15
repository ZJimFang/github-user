import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import UserCard from "./UserCard";

const DefaultUsers = () => {
  const userCards = [];
  const [defaultUsers, setDefaultUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all([
        fetchDefaultUser("ZJimFang"),
        fetchDefaultUser("dcard"),
        fetchDefaultUser("WebDevSimplified"),
        fetchDefaultUser("yahoo"),
        fetchDefaultUser("github"),
        fetchDefaultUser("facebook"),
      ]);
      await setDefaultUsers(data);
    };
    fetchData();
  }, []);

  const fetchDefaultUser = (userName) => {
    return fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => {
        const { avatar_url, login, name, public_repos } = data;
        return { avatar_url, login, name, public_repos };
      });
  };

  defaultUsers.forEach((user) => {
    userCards.push(
      <Grid item key={uuidv4()}>
        <UserCard user={user} />
      </Grid>
    );
  });

  return <>{userCards}</>;
};

export default DefaultUsers;
