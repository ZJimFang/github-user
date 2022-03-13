import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import "../style/effect.scss";
import axios from "axios";

const User = () => {
  let { username } = useParams();
  const [userRepos, setUserRepos] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos?first=10`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        return err;
      });
  }, [username]);

  // const fetchUserRepos = (username) => {
  //   return fetch(`https://api.github.com/users/${username}/repos?_limit=10`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       return data;
  //     });
  // };

  // useEffect(() => {
  //   fetchUserRepos(username).then((data) => {
  //     setUserRepos(data);
  //   });
  // }, [username]);
  console.log(userRepos);
  return (
    <Box
      sx={{
        width: "95vw",
        height: "95vh",
        backgroundColor: "#353535",
        borderRadius: 5,
        overflow: "scroll",
      }}
    >
      <Box
        sx={{
          width: "95%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 2,
          position: "fixed",
        }}
      >
        <Typography
          className="repos_title"
          sx={{
            fontSize: "30px",
            color: "white",
          }}
        >
          Welcome to {username}'s repositories
        </Typography>
      </Box>
    </Box>
  );
};

export default User;
