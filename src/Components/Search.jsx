/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box } from "@mui/material";

const Search = () => {
  return (
    <Box
      sx={{
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        m: 1.5,
        borderRadius: 3,
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 250,
          height: 50,
          backgroundColor: "#353535",
        }}
        inputProps={{
          style: { color: "white" },
        }}
      >
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <GitHubIcon />
        </IconButton>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search users" />
      </Paper>
    </Box>
  );
};

export default Search;
