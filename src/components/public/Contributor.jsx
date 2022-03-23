import React from "react";
import Avatar from "@mui/material/Avatar";

const Contributor = ({ contributor }) => {
  const { avatar_url, login } = contributor;
  return <Avatar alt={`${login}`} src={`${avatar_url}`}></Avatar>;
};

export default Contributor;
