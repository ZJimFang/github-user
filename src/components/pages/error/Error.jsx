import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@material-ui/core";
import { centerColumn } from "../../public/centerTypes";
import { btn } from "./style";
import "../../../style/effect.scss";

const NoMatch = () => {
  return (
    <Box style={centerColumn}>
      <div className="noMatch">404</div>

      <Button variant="outlined" href="/" style={btn}>
        Go Back
      </Button>
    </Box>
  );
};

export default NoMatch;
