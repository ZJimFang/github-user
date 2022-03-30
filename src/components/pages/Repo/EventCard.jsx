import React from "react";
import { Box } from "@mui/material";
import Contributor from "../../public/Contributor";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import { makeStyles } from "@mui/styles";
import { spaceBetween } from "../../public/centerTypes";

const useStyles = makeStyles({
  card: {
    "&&": {
      py: 1,
      borderBottom: "2px solid #373E47",
    },
  },
  message: {
    "&&": {
      textAlign: "center",
      margin: "10px",
      padding: "5px 0",
    },
  },
  infoIcon: {
    "&&": {
      color: "#768390",
      width: "15px",
      height: "15px",
    },
  },
});

const EventCard = ({ event }) => {
  const classes = useStyles();
  const {
    commit: {
      message,
      author: { date },
    },
    author,
  } = event;
  const timeObj = new Date(date);
  const timeStr = timeObj.toDateString().split(" ");

  return (
    <Box className={classes.card} style={spaceBetween}>
      {author ? (
        <Contributor avatar_url={author.avatar_url} login={author.login} />
      ) : (
        ""
      )}
      <Typography color="#ADBAC7" className={classes.message}>
        {message}
      </Typography>
      <Tooltip
        title={`committed ${timeStr[2]} ${timeStr[1]} ${timeStr[3]}`}
        placement="top"
      >
        <InfoIcon className={classes.infoIcon} />
      </Tooltip>
    </Box>
  );
};

export default EventCard;
