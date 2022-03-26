import React from "react";
import EventCard from "./EventCard";
import { v4 as uuidv4 } from "uuid";

const EventList = ({ eventData }) => {
  return (
    <>
      {eventData.map((item) => (
        <EventCard key={uuidv4()} />
      ))}
    </>
  );
};

export default EventList;
