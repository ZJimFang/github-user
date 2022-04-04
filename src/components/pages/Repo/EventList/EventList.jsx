import React from "react";
import { Box } from "@mui/material";
import EventCard from "../EventCard/EventCard";
import { v4 as uuidv4 } from "uuid";
import { list } from "./style";

const EventList = ({ eventData }) => {
  return (
    <Box style={list}>
      {eventData.map((event) => (
        <EventCard event={event} key={uuidv4()} />
      ))}
    </Box>
  );
};

export default EventList;
