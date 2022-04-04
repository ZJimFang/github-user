import React from "react";
import Avatar from "@mui/material/Avatar";
import { Link as RouterLink } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { avatar } from "./style";

const Contributor = ({ avatar_url, login }) => {
  return (
    <Tooltip title={login} placement="top" arrow>
      <Avatar
        style={avatar}
        alt={`${login}`}
        src={`${avatar_url}`}
        component={RouterLink}
        to={`/users/${login}/repos`}
      ></Avatar>
    </Tooltip>
  );
};

export default Contributor;
