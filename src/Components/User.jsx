import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const User = () => {
  let { username } = useParams();
  const [userRepos, setUserRepos] = useState({});

  const fetchUserRepos = (username) => {
    return fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  };

  useEffect(() => {
    fetchUserRepos(username).then((data) => {
      setUserRepos(data);
    });
  }, [username]);
  return <div>{username}</div>;
};

export default User;
