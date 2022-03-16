import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@material-ui/core";
import CardMedia from "@mui/material/CardMedia";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import language_match from "../json/language_match.json";
import fork from "../images/fork.png";

const liStyled = {
  display: "flex",
  width: "100%",
  borderTop: "1px solid #444c56",
  alignItems: "center",
};

const RepoCard = ({ repo }) => {
  let language_color = "red";
  let status_color = "#9CD08F";
  let timeObj;
  const {
    name,
    description,
    visibility,
    language,
    forks,
    updated_at,
    stargazers_count,
    watchers_count,
  } = repo;

  for (const item in language_match) {
    if (item === language) {
      language_color = language_match[item].color;
      break;
    } else {
      language_color = "#768390";
    }
  }

  timeObj = new Date(updated_at);

  console.log(timeObj);

  return (
    <li style={liStyled}>
      <Box
        sx={{
          p: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontSize: 22,
              color: "#6EA4BF",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {name}
          </Typography>

          <Typography
            sx={{
              fontSize: 1,
              ml: 1,
              p: "0 7px",
              color: `${status_color}`,
              border: `1px solid ${status_color}`,
              borderRadius: "2rem",
            }}
          >
            {visibility.match("^[a-z]")
              ? visibility.charAt(0).toUpperCase() + visibility.substring(1)
              : visibility}
          </Typography>
        </Box>

        <Box sx={{ mb: 1, maxWidth: "400px" }}>
          <Typography sx={{ color: "#768390", fontSize: "10px" }}>
            {description}
          </Typography>
        </Box>

        <Box
          sx={{
            fontSize: 1,
            color: "#768390",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: `${language_color}`,
              mr: "4px",
              mt: "1px",
            }}
          ></Box>
          {language || "-"}

          <CardMedia
            sx={{
              ml: 2,
              mr: 0.5,
              width: "18px",
              height: "18px",
            }}
            image={fork}
            component="img"
          />
          {forks}

          <StarBorderIcon
            sx={{
              ml: 2,
              mr: 0.5,
              width: "18px",
              height: "18px",
              color: "#768390",
            }}
          />
          {stargazers_count}

          <VisibilityIcon
            sx={{
              ml: 2,
              mr: 0.5,
              width: "18px",
              height: "18px",
              color: "#768390",
            }}
          />
          {watchers_count}

          <Typography
            sx={{
              fontSize: 1,
              ml: 2,
              color: "#768390",
            }}
          >
            update on {timeObj.getDate()}
          </Typography>
        </Box>
      </Box>
    </li>
  );
};

export default RepoCard;
