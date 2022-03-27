import React from "react";
import { Box } from "@mui/material";
import Contributor from "../../public/Contributor";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";

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
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1,
        borderBottom: "2px solid #373E47",
      }}
    >
      {author ? (
        <Contributor avatar_url={author.avatar_url} login={author.login} />
      ) : (
        ""
      )}
      <Typography
        sx={{
          textAlign: "center",
          color: "#ADBAC7",
          ml: 1,
        }}
      >
        {message}
      </Typography>
      <Tooltip
        title={`committed ${timeStr[2]} ${timeStr[1]} ${timeStr[3]}`}
        placement="top"
      >
        <InfoIcon
          sx={{
            color: "#768390",
            width: "15px",
            height: "15px",
          }}
        />
      </Tooltip>
    </Box>
  );
};

export default EventCard;
