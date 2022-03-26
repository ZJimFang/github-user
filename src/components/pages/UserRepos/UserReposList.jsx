import React from "react";
import UserReposItem from "./UserReposItem";
import { v4 as uuidv4 } from "uuid";

const UserRepoList = ({ userReposData }) => {
  return (
    <>
      {userReposData.map((item) => (
        <UserReposItem repo={item} key={uuidv4()} />
      ))}
    </>
  );
};

export default UserRepoList;
