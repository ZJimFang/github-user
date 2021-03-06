import React, { useEffect, useState } from "react";
import NameHeader from "../../public/NameHeader/NameHeader.jsx";
import UserReposList from "../UserRepos/UserReposList";
import { centerColumnStart } from "../../public/centerTypes";

async function fetchData(username, repo) {
  const res = await fetch(`https://api.github.com/repos/${username}/${repo}`);
  const data = await res.json();
  return data;
}

const Favorites = () => {
  const [userReposData, setUserReposData] = useState([]);

  useEffect(() => {
    for (const [key, value] of Object.entries(localStorage)) {
      const fetch = async () => {
        const obj = JSON.parse(value);
        const login = obj.login;
        const repo = obj.name;
        const data = await fetchData(login, repo);
        setUserReposData(function (prevData) {
          return [...prevData, data];
        });
      };
      fetch();
    }
  }, []);
  return (
    <div className="container">
      <NameHeader
        title={"Your Favorite Repositories"}
        toWhere={"/"}
        route={"./favorites"}
      />
      <ul style={centerColumnStart}>
        <UserReposList userReposData={userReposData} />
      </ul>
    </div>
  );
};

export default Favorites;
