import React from "react";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

const UserReposHeader = ({ title, toWhere }) => {
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
      <Typography
        className="repos_title"
        sx={{
          fontSize: "30px",
          color: "white",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default UserReposHeader;
