import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@material-ui/core";
import CardMedia from "@mui/material/CardMedia";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import language_match from "../../../json/language_match.json";
import fork from "../../../images/fork.png";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import { Link as RouterLink } from "react-router-dom";
import LoveBtn from "../../public/LoveBtn/LoveBtn";
import {
  detailBox,
  descriptionStyled,
  itemStyled,
  list,
  reposName,
  status,
  info,
  languageStyled,
  icon,
} from "./style";
import {
  spaceBetween,
  flex_start,
  centerRowBegin,
} from "../../public/centerTypes";

const RepoCard = ({ repo }) => {
  let language_color = "red";
  const {
    name,
    description,
    visibility,
    language,
    forks,
    pushed_at,
    stargazers_count,
    watchers_count,
    owner: { login },
  } = repo;
  const timeObj = new Date(pushed_at);
  const timeStr = timeObj.toDateString().split(" ");

  //find out the language color in /json/language_match
  for (const item in language_match) {
    if (item === language) {
      language_color = language_match[item].color;
      break;
    } else {
      language_color = "#768390";
    }
  }

  return (
    <li style={{ ...spaceBetween, ...list }}>
      <Box style={itemStyled}>
        <Box style={flex_start}>
          <Typography
            style={reposName}
            component={RouterLink}
            to={`/users/${login}/repos/${name}`}
          >
            {name}
          </Typography>

          <Typography style={status} color="#9CD08F">
            {visibility.match("^[a-z]")
              ? visibility.charAt(0).toUpperCase() + visibility.substring(1)
              : visibility}
          </Typography>

          <Tooltip
            title={`update on ${timeStr[2]} ${timeStr[1]} ${timeStr[3]}`}
            placement="top"
          >
            <InfoIcon style={info} />
          </Tooltip>
        </Box>

        <Box style={descriptionStyled}>
          <Typography variant="body2" color="#768390">
            {description}
          </Typography>
        </Box>

        <Box style={{ ...centerRowBegin, ...detailBox }}>
          <Box
            style={languageStyled}
            sx={{ backgroundColor: `${language_color}` }}
          />
          {language || "-"}

          <CardMedia style={icon} image={fork} component="img" />
          {forks}

          <StarBorderIcon style={icon} />
          {stargazers_count}

          <VisibilityIcon style={icon} />
          {watchers_count}
        </Box>
      </Box>

      <LoveBtn login={login} name={name} />
    </li>
  );
};

export default RepoCard;
