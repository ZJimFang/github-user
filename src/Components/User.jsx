import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import RepoCard from "./RepoCard";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "../style/effect.scss";

const User = () => {
  const userRepos_card = [];
  let { username } = useParams();
  const [userRepos, setUserRepos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${username}/repos?page=${page}&per_page=10`
      )
      .then((res) => {
        setUserRepos(res.data);
      })
      .catch((err) => {
        return err;
      });
  }, [page, username]);

  userRepos.forEach((repo) => {
    userRepos_card.push(
      <Box
        sx={{
          width: "95%",
          height: "100px",
          borderTop: "1px solid #444c56",
        }}
        key={uuidv4()}
      >
        <RepoCard repo={repo} />
      </Box>
    );
  });

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
        className="Header"
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 2,
          mb: 2.5,
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

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          flexDirection: "column",
        }}
      >
        {userRepos_card}
      </Box>
    </Box>
  );
};

export default User;
