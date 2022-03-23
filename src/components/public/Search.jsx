import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, InputBase, IconButton } from "@material-ui/core";

async function fetchData(user) {
  const res = await fetch(`https://api.github.com/users${user}`);
  if (res.ok) {
    return res.json();
  }
  throw new Error("no user found");
}

const Search = ({ setUserInfo, setIsConnect }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    if (user !== "") {
      fetchData(user)
        .then((data) => {
          setUserInfo(data);
          setIsConnect(true);
        })
        .catch((error) => {
          setIsConnect(false);
          console.clear();
          console.log(error);
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
