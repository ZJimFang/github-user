import React from "react";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link as RouterLink } from "react-router-dom";
import { centerColumn } from "./centerTypes";

const headerStyle = {
  width: "100%",
  position: "relative",
  margin: "20px 0 25px 0",
};
const arrow = {
  cursor: "pointer",
  position: "absolute",
  bottom: "6px",
  left: "20px",
};

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
