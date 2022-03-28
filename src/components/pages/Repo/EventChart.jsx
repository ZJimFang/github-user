import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  animations: {
    tension: {
      duration: 1000,
      easing: "linear",
      from: 1,
      to: 0,
      loop: true,
    },
  },
  scales: {
    y: {
      display: false, // Hide Y axis labels
    },
    x: {
      display: false, // Hide X axis labels
    },
  },
  tooltips: { enabled: false },
  hover: { mode: null },
};

async function fetchData(username, repo, eventTime_Set) {
  let page = 0;
  while (eventTime_Set.size <= 30) {
    const res = await fetch(
      `https://api.github.com/repos/${username}/${repo}/commits?page=${page}&per_page=100`
    );
    const data = await res.json();
    if (data.length === 0) break;
    data.map((event) => {
      const timeObj = new Date(event.commit.author.date);
      const timeStr = timeObj.toDateString();
      eventTime_Set.add(timeStr);
    });
    page++;
  }
}

function buildTimeLine(eventTime_Set) {
  const today = new Date().getTime();
  const res = [];
  const reversed = new Set(Array.from(eventTime_Set).reverse());
  for (let i = 0; i < 30; i++) {
    const timeObj = new Date(today - 86400000 * i);
    const timeStr = timeObj.toDateString();
    if (reversed.has(timeStr)) {
      res.push(1);
    } else {
      res.push(-1);
    }
  }
  return res;
}

const EventChart = () => {
  const eventTime_Set = new Set();
  const { username, repo } = useParams();
  const arr = new Array(30).fill(1);
  const [chart, setChart] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  });

  useEffect(() => {
    const fetch = async () => {
      await fetchData(username, repo, eventTime_Set);
      const chartData = await buildTimeLine(eventTime_Set);
      chartData.reverse();
      setChart({
        labels: arr.map((item) => item),
        datasets: [
          {
            data: chartData.map((item) => item),
            borderColor: "rgb(75, 192, 192)",
            pointRadius: 0,
          },
        ],
      });
    };
    fetch();
  }, []);

  return (
    <Tooltip title={"Activity in the first 30 days"} placement="top" arrow>
      <Box
        sx={{
          minWidth: "35vw",
          height: "35vh",
          border: "1px solid rgb(75, 192, 192)",
          borderRadius: "10px",
          px: 1,
        }}
      >
        <Line data={chart} options={options} />
      </Box>
    </Tooltip>
  );
};
export default EventChart;
