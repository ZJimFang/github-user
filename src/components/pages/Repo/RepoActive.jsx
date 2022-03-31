import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import EventList from "./EventList";
import EventChart from "./EventChart";
import { spaceAround } from "../../public/centerTypes";

async function fetchData(username, repo) {
  const res = await fetch(
    `https://api.github.com/repos/${username}/${repo}/commits`
  );
  const data = await res.json();
  return data;
}

const RepoActive = () => {
  const [eventData, setEventData] = useState([]);
  const { username, repo } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData(username, repo);
      setEventData(data);
    };
    fetch();
  }, []);

  return (
    <Box style={spaceAround} sx={{ mt: 2, height: "35vh" }}>
      <EventChart />
      <EventList eventData={eventData} />
    </Box>
  );
};

export default RepoActive;