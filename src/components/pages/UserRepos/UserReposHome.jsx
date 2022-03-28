import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import UserReposList from "./UserReposList";
import NameHeader from "../../public/NameHeader";
import "../../../style/effect.scss";

async function fetchData(username, page) {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?page=${page}&per_page=10`
  );
  const data = await res.json();
  return data;
}

async function fetchNum(username) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const { public_repos } = await res.json();
  return public_repos;
}

const User = () => {
  let { username } = useParams();
  const [userReposData, setUserReposData] = useState([]);
  const [page, setPage] = useState(1);
  const [canConnect, setCanConnect] = useState(true);
  const [repositoriesNum, setRepositoriesNum] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const public_repos = await fetchNum(username);

      if (public_repos < 10) setCanConnect(false);
      setRepositoriesNum(public_repos);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData(username, page);
      setUserReposData(function (prevData) {
        return [...prevData, ...data];
      });
    };
    fetch();
  }, [page]);

  //detect wether scroll to the bottom
  const handleScroll = (e) => {
    const position_now = Math.floor(e.target.scrollHeight - e.target.scrollTop);
    if (position_now - 5 < Math.floor(e.target.clientHeight) && canConnect) {
      let page_now = page + 1;

      if (page_now * 10 >= repositoriesNum) {
        setCanConnect(false);
      }
      setPage(page_now);
    }
  };

  return (
    <div className="container" onScroll={handleScroll}>
      <NameHeader
        title={`${username}'s repositories`}
        toWhere={"/"}
        route={`https://github.com/${username}`}
      />
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
