import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@material-ui/core";
import "../../style/effect.scss";
import { centerColumn } from "../public/centerTypes";

const btn = {
  borderColor: "#1d9bc2",
  color: "#1d9bc2",
};

const NoMatch = () => {
  return (
    <Box style={centerColumn}>
      <div className="noMatch">404</div>

      <Button variant="outlined" href="/" style={{ ...btn }}>
        Go Back
      </Button>
    </Box>
  );
};

export default NoMatch;
