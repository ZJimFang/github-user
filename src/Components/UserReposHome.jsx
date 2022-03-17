import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import UserReposList from "./UserReposList";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../style/effect.scss";

async function fetchData(username, page, setUserReposData) {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?page=${page}&per_page=10`
  );
  const data = await res.json();
  await setUserReposData(function (prevData) {
    return [...prevData, ...data];
  });
}

async function fetchNum(username, setRepositoriesNum) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();
  const { public_repos } = data;
  setRepositoriesNum(public_repos);
}

const User = () => {
  let { username } = useParams();
  const [userReposData, setUserReposData] = useState([]);
  const [page, setPage] = useState(1);
  const [canConnect, setCanConnect] = useState(true);
  const [repositoriesNum, setRepositoriesNum] = useState(0);

  //get repositories num
  useEffect(() => {
    fetchNum(username, setRepositoriesNum);
  }, [username]);

  //call api
  useEffect(() => {
    fetchData(username, page, setUserReposData);
  }, [username, page]);

  //detect wether scroll to the bottom
  const handleScroll = (e) => {
    const position_now = Math.floor(e.target.scrollHeight - e.target.scrollTop);
    if (position_now - 5 < Math.floor(e.target.clientHeight) && canConnect) {
      let page_now = page + 1;
      setPage(page_now);

      if (page_now * 10 >= repositoriesNum) {
        console.log("stop");
        setCanConnect(false);
      }
    }
  };

  return (
    <Box
      sx={{
        width: "95vw",
        height: "95vh",
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
        <ArrowBackIcon />
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
        <UserReposList userReposData={userReposData} />
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
        {canConnect ? (
          <CircularProgress
            style={{
              width: "20px",
              height: "20px",
            }}
          />
        ) : (
          <Typography
            className="repos_title"
            sx={{
              fontSize: "15px",
              color: "#768390",
            }}
          >
            There is no more repositories here.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default User;
