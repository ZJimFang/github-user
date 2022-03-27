import React from "react";
import { Box } from "@mui/material";
import EventCard from "./EventCard";
import { v4 as uuidv4 } from "uuid";

const EventList = ({ eventData }) => {
  return (
    <Box
      sx={{
        p: 1,
        height: "80%",
        width: "450px",
        color: "white",
        overflow: "auto",
        border: "6px solid #373E47",
        borderRadius: "5%",
      }}
    >
      {eventData.map((event) => (
        <EventCard event={event} key={uuidv4()} />
      ))}
    </Box>
  );
};

export default EventList;
