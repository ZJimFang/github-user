/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box } from "@mui/material";
import axios from "axios";

const Search = ({ setUserInfo, setIsConnect }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    if (user !== "") {
      axios
        .get(`https://api.github.com/users${user}`)
        .then((res) => {
          setUserInfo(res.data);
          setIsConnect(true);
        })
        .catch((err) => {
          setIsConnect(false);
          console.clear();
          return err;
        });
    }
  }, [setIsConnect, setUserInfo, user]);

  const insertUser = (e) => {
    const user = e.target.value;
    user === "" ? setUser("") : setUser(`/${user}`);
  };

  return (
    <Box
      sx={{
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        mt: 2,
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 170,
          height: 35,
          backgroundColor: "#202020",
        }}
      >
        <IconButton type="submit" sx={{ p: "8px" }}>
          <GitHubIcon />
        </IconButton>

        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search users"
          onChange={insertUser}
        />
      </Paper>
    </Box>
  );
};

export default Search;
