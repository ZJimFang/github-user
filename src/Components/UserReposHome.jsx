import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import UserReposList from "./UserReposList";
import UserReposHeader from "./UserReposHeader";
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

async function fetchNum(username, setRepositoriesNum, setCanConnect) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();
  const { public_repos } = data;

  if (public_repos < 10) setCanConnect(false);

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
    fetchNum(username, setRepositoriesNum, setCanConnect);
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
        setCanConnect(false);
      }
    }
  };

  return (
    <div className="container" onScroll={handleScroll}>
      <UserReposHeader title={`${username}'s repositories`} toWhere={"/"} />
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
    </div>
  );
};

export default User;
