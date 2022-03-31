import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, IconButton } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { centerRow } from "./centerTypes";

const useStyles = makeStyles({
  search: {
    "&&": {
      padding: "2px 4px",
      width: 170,
      height: 35,
      backgroundColor: "#202020",
    },
  },
});

//fetch user information
async function fetchData(user) {
  const res = await fetch(`https://api.github.com/users${user}`);
  if (res.ok) {
    return res.json();
  }
  throw new Error("no user found");
}

const Search = ({ setUserInfo, setIsConnect }) => {
  const classes = useStyles();
  const [user, setUser] = useState("");

  //if user input the search value then fetch
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
        });
    }
  }, [setIsConnect, setUserInfo, user]);

  //search value is match
  function insertUser(e) {
    const user = e.target.value;
    user === "" ? setUser("") : setUser(`/${user}`);
  }

  return (
    <Paper className={classes.search} style={centerRow} component="form">
      <IconButton type="submit" sx={{ p: "8px" }}>
        <SearchIcon />
      </IconButton>

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search users"
        onChange={insertUser}
      />
    </Paper>
  );
};

export default Search;
