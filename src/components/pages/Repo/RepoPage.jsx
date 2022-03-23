import React, { useState, useEffect } from "react";
import NameHeader from "../../public/NameHeader";
import RepoInfo from "./RepoInfo";
import { useParams } from "react-router-dom";

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
        full_name,
        events_url,
        languages_url,
        contributors_url,
        clone_url,
        ssh_url,
        description,
        stargazers_count,
        fork_count,
      } = data;
      setRepoInfo({
        full_name,
        events_url,
        languages_url,
        contributors_url,
        clone_url,
        ssh_url,
        description,
        stargazers_count,
        fork_count,
      });
    };
    fetch();
  }, [repo, username]);

  return (
    <div className="container">
      <NameHeader
        title={`${username} / ${repo}`}
        toWhere={`/users/${username}/repos`}
        route={`${username}/${repo}`}
      />
      <RepoInfo repoInfo={repoInfo}></RepoInfo>
    </div>
  );
};

export default UserRepoPage;
