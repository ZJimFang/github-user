import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tooltip from "@mui/material/Tooltip";
import { Box, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import { Link as RouterLink } from "react-router-dom";

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
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 3,
        my: 2,
      }}
    >
      <a href={`/`}>
        <GitHubIcon sx={{ fontSize: "45px", mx: 3 }} />
      </a>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 3,
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
            <SearchIcon />
          </IconButton>

          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search users"
            onChange={insertUser}
          />
        </Paper>
        <Box component={RouterLink} to={`/favorites`}>
          <Tooltip title={"Love"} placement="top">
            <FavoriteIcon
              sx={{
                border: "1px solid #A72608",
                p: 1,
                mx: 1,
                color: "#A72608",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            />
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default Search;
