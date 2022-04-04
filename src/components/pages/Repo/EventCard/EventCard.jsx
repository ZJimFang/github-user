import React from "react";
import { Box } from "@mui/material";
import Contributor from "../Contributor/Contributor";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import { spaceBetween } from "../../../public/centerTypes";
import { card, messageStyled, infoIcon } from "./style";

const EventCard = ({ event }) => {
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
    <Box style={{ ...spaceBetween, ...card }}>
      {author ? (
        <Contributor avatar_url={author.avatar_url} login={author.login} />
      ) : (
        ""
      )}
      <Typography color="#ADBAC7" style={messageStyled}>
        {message}
      </Typography>
      <Tooltip
        title={`committed ${timeStr[2]} ${timeStr[1]} ${timeStr[3]}`}
        placement="top"
      >
        <InfoIcon style={infoIcon} />
      </Tooltip>
    </Box>
  );
};

export default EventCard;
