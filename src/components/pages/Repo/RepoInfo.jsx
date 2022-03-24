import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Contributor from "../../public/Contributor";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from "uuid";
import LoveBtn from "../../public/LoveBtn";

async function fetchData(url) {
  if (url === undefined) return;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

const RepoInfo = ({ repoInfo }) => {
  let style = "";
  const { contributors_url, description } = repoInfo || "";

  const [contributors, setContributors] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const contributors = await fetchData(contributors_url);
      if (contributors) setContributors(contributors);
    };
    fetch();
  }, [contributors_url]);
  style = contributors.length < 5 ? "center" : "flex-start";

  return (
    <Box
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around",
        borderTop: "1px solid",
        borderColor: "#ADBAC7",
      }}
    >
      <Box
        sx={{
          my: 2,
          mx: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography
          sx={{
            color: "#ADBAC7",
            mb: 1,
          }}
        >
          Contributors
        </Typography>
        <Box
          sx={{
            width: "250px",
            height: "40px",
            overflow: "scroll",
          }}
        >
          <Stack direction="row" spacing={2} justifyContent={style}>
            {contributors.map((contributor) => (
              <Contributor contributor={contributor} key={uuidv4()} />
            ))}
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          mx: 1,
          my: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",
          height: "80px",
        }}
      >
        <Typography
          sx={{
            color: "#ADBAC7",
            mb: 1,
          }}
        >
          Description
        </Typography>
        <Typography
          sx={{
            color: "#768390",
            overflow: "auto",
            textAlign: "center",
          }}
        >
          {description || "---"}
        </Typography>
      </Box>

      <Box
        sx={{
          mx: 1,
          my: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "250px",
        }}
      >
        <LoveBtn />
      </Box>
    </Box>
  );
};

export default RepoInfo;
