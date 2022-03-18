import React, { useState, useEffect } from "react";
import UserReposHeader from "./UserReposHeader";
import { useParams } from "react-router-dom";

async function fetchData(owner, repo) {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  const data = await res.json();
  console.log(data);
  return data;
}

const UserRepoPage = () => {
  const [repoInfo, setRepoInfo] = useState();
  const { username, repo } = useParams();
  useEffect(() => {
    fetchData(username, repo).then((data) => {
      const { full_name, description, stargazers_count, html_url } = data;
      setRepoInfo({ full_name, description, stargazers_count, html_url });
    });
  }, [repo, username]);

  console.log(repoInfo);
  return (
    <div className="container">
      <UserReposHeader
        title={`${username} / ${repo}`}
        toWhere={`/users/${username}/repos`}
      />
    </div>
  );
};

export default UserRepoPage;
