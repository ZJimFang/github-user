import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import UserCard from "./UserCard";

const DefaultUsers = () => {
  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <UserCard />
        </Grid>
        <Grid item>
          <UserCard />
        </Grid>
        <Grid item>
          <UserCard />
        </Grid>
        <Grid item>
          <UserCard />
        </Grid>
        <Grid item>
          <UserCard />
        </Grid>
        <Grid item>
          <UserCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DefaultUsers;
