import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@material-ui/core";
import "../../style/effect.scss";

const NoMatch = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItem: "center",
      }}
    >
      <div className="noMatch">404</div>

      <Button
        variant="outlined"
        href="/"
        sx={{
          borderColor: "#1d9bc2",
          color: "#1d9bc2",
        }}
      >
        Go Back
      </Button>
    </Box>
  );
};

export default NoMatch;
