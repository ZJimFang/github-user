import React from "react";
import Avatar from "@mui/material/Avatar";
import { Link as RouterLink } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const Contributor = ({ contributor }) => {
  const { avatar_url, login } = contributor;
  return (
    <Tooltip title={login} placement="top" arrow>
      <Avatar
        alt={`${login}`}
        src={`${avatar_url}`}
        component={RouterLink}
        to={`/users/${login}/repos`}
        sx={{ cursor: "pointer" }}
      ></Avatar>
    </Tooltip>
  );
};

export default Contributor;
