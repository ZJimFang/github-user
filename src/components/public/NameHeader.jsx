import React from "react";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { centerColumn } from "./centerTypes";

const useStyles = makeStyles({
  headerStyle: {
    "&&": {
      width: "100%",
      position: "relative",
      margin: "20px 0 25px 0",
    },
  },
  arrow: {
    cursor: "pointer",
    position: "absolute",
    bottom: "6px",
    left: "20px",
  },
});

const NameHeader = ({ title, toWhere, route }) => {
  const classes = useStyles();
  return (
    <Box className={`Header ${classes.headerStyle}`} style={centerColumn}>
      <Box component={RouterLink} to={toWhere}>
        <ArrowBackIcon className={classes.arrow} style={centerColumn} />
      </Box>
      <a href={`${route}`} className="repos_title" target="_blank">
        {title}
      </a>
    </Box>
  );
};

export default NameHeader;
