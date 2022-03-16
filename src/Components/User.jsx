import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import RepoCard from "./RepoCard";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "../style/effect.scss";

const User = () => {
  let i = 0;
  let { username } = useParams();
  const userRepos_card = [];
  const [userRepos, setUserRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [canConnect, setCanConnect] = useState(true);
  //call api
  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${username}/repos?page=${page}&per_page=10`
      )
      .then((res) => {
        setUserRepos(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }, [page, username]);

  const handleScroll = (e) => {
    const position_now = Math.floor(e.target.scrollHeight - e.target.scrollTop);
    if (position_now - 5 < e.target.clientHeight && canConnect) {
      let page_now = page + 1;
      setPage(page_now);
      setCanConnect(false);
    }
  };

  //push data
  userRepos.forEach((repo) => {
    i++;
    userRepos_card.push(<RepoCard key={uuidv4()} repo={repo} i={i} />);
  });

  return (
    <Box
      sx={{
        width: "95vw",
        maxHeight: "95vh",
        backgroundColor: "#353535",
        borderRadius: 5,
        overflow: "scroll",
      }}
      onScroll={handleScroll}
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
          {username}'s repositories
        </Typography>
      </Box>

      <ul
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          flexDirection: "column",
        }}
      >
        {userRepos_card}
      </ul>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 1,
          mb: 2,
        }}
      >
        <CircularProgress
          style={{
            width: "20px",
            height: "20px",
          }}
        />
      </Box>
    </Box>
  );
};

export default User;
