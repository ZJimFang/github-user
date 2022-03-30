import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import NameHeader from "../../public/NameHeader";
import RepoInfo from "./RepoInfo";
import RepoDetail from "./RepoDetail";
import RepoActive from "./RepoActive";
import { useParams } from "react-router-dom";
import { spaceAround } from "../../public/centerTypes";

async function fetchData(owner, repo) {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  const data = await res.json();
  return data;
}

const UserRepoPage = () => {
  const [repoInfo, setRepoInfo] = useState();
  const { username, repo } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData(username, repo);
      const {
        languages_url,
        contributors_url,
        description,
        stargazers_count,
        forks_count,
        owner,
        name,
        owner: { login },
      } = data;
      setRepoInfo({
        languages_url,
        contributors_url,
        description,
        stargazers_count,
        forks_count,
        owner,
        name,
        login,
      });
    };
    fetch();
  }, [repo, username]);

  return (
    <div className="container">
      <NameHeader
        title={`${username} / ${repo}`}
        toWhere={`/users/${username}/repos`}
        route={`https://github.com/${username}/${repo}`}
      />
      <Box style={spaceAround}>
        <RepoInfo repoInfo={repoInfo} />
        <RepoDetail repoInfo={repoInfo} />
      </Box>
      <RepoActive repoInfo={repoInfo} />
    </div>
  );
};

export default UserRepoPage;
