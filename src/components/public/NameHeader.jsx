import React from "react";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link as RouterLink } from "react-router-dom";

const NameHeader = ({ title, toWhere, route }) => {
  return (
    <Box
      className="Header"
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        mt: 2,
        mb: 2.5,
      }}
    >
      <Box
        component={RouterLink}
        to={toWhere}
        sx={{
          cursor: "pointer",
          position: "absolute",
          left: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowBackIcon
          sx={{
            lineHeight: "30px",
          }}
        />
      </Box>
      <a href={`${route}`} className="repos_title" target="_blank">
        {title}
      </a>
    </Box>
  );
};

export default NameHeader;
