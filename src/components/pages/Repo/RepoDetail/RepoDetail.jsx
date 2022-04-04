import React from "react";
import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import fork from "../../../../images/fork.svg";
import PieChart from "../PieChart/PieChart";
import { centerColumn, spaceAround_nowrap } from "../../../public/centerTypes";
import {
  iconStyled,
  iconContainer,
  chartContainer,
  container,
  num,
} from "./style";

const RepoDetail = ({ repoInfo }) => {
  const { stargazers_count, forks_count, languages_url } = repoInfo || "";
  return (
    <Box style={{ ...centerColumn, ...container }}>
      <Box style={{ ...centerColumn, ...chartContainer }}>
        <PieChart languages_url={languages_url} />
      </Box>

      <Box style={spaceAround_nowrap}>
        <Box style={{ ...centerColumn, ...iconContainer }}>
          <StarIcon style={iconStyled} />
          <Typography style={num}>{stargazers_count}</Typography>
        </Box>

        <Box style={{ ...centerColumn, ...iconContainer }}>
          <CardMedia style={iconStyled} image={fork} component="img" />
          <Typography style={num}>{forks_count}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RepoDetail;
