import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ClearIcon from "@mui/icons-material/Clear";
import language_match from "../../../json/language_match.json";

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

async function fetchData(url) {
  if (url === undefined) return;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

function PieChart({ languages_url }) {
  const [hasData, setHasData] = useState(false);
  const [languageData, setLanguageData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],
  });

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData(languages_url);
      const set = [];
      let total = 0;
      if (data === undefined || Object.entries(data).length === 0) return;
      for (let prop in data) {
        total += data[prop];
      }
      for (let prop in data) {
        let language_color = "";
        for (const language in language_match) {
          if (language === prop) {
            language_color = language_match[prop].color;
            break;
          } else {
            language_color = "#768390";
          }
        }
        set.push({
          name: prop,
          val: Math.round((data[prop] / total) * 100),
          color: language_color,
        });
      }
      setLanguageData({
        labels: set.map((data) => data.name),
        datasets: [
          {
            data: set.map((data) => data.val),
            backgroundColor: set.map((data) => data.color),
          },
        ],
      });
      setHasData(true);
    };
    fetch();
  }, [languages_url]);

  return hasData ? (
    <Pie data={languageData} options={options} />
  ) : (
    <ClearIcon
      sx={{
        width: "80px",
        height: "80px",
      }}
    />
  );
}

export default PieChart;
