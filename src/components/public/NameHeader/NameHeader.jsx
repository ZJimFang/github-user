import React from "react";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link as RouterLink } from "react-router-dom";
import { centerColumn } from "../centerTypes";
import { headerStyle, arrow } from "./style";

const NameHeader = ({ title, toWhere, route }) => {
  return (
    <Box className={`Header`} style={{ ...centerColumn, ...headerStyle }}>
      <Box component={RouterLink} to={toWhere}>
        <ArrowBackIcon style={{ ...arrow, ...centerColumn }} />
      </Box>
      <a href={`${route}`} className="repos_title" target="_blank">
        {title}
      </a>
    </Box>
  );
};

export default NameHeader;
