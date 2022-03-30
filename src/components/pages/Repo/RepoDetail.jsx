import React from "react";
import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import fork from "../../../images/fork.svg";
import PieChart from "./PieChart";
import { centerColumn, spaceAround_nowrap } from "../../public/centerTypes";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  num: {
    "&&": {
      mt: 1,
      px: "6px",
      minWidth: 20,
      fontSize: "12px",
      fontHeight: "12px",
      fontWeight: "400px",
      borderRadius: "2rem",
      textAlign: "center",
      backgroundColor: "#768390",
      color: "#ADBAC7",
    },
  },
});
const RepoDetail = ({ repoInfo }) => {
  const classes = useStyles();
  const { stargazers_count, forks_count, languages_url } = repoInfo || "";
  return (
    <Box style={centerColumn} sx={{ width: "450px" }}>
      <Box style={centerColumn} sx={{ m: 2, width: "250px", height: "180px" }}>
        <PieChart languages_url={languages_url} />
      </Box>

      <Box style={spaceAround_nowrap}>
        <Box style={centerColumn} sx={{ my: 1, width: "250px" }}>
          <StarIcon sx={{ fontSize: "2.5rem", color: "#DEBA6F" }} />
          <Typography className={classes.num}>{stargazers_count}</Typography>
        </Box>

        <Box style={centerColumn} sx={{ my: 1, width: "250px" }}>
          <CardMedia sx={{ width: "2.5rem" }} image={fork} component="img" />
          <Typography className={classes.num}>{forks_count}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RepoDetail;
