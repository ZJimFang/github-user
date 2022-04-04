import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Contributor from "../Contributor/Contributor";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from "uuid";
import LoveBtn from "../../../public/LoveBtn/LoveBtn";
import {
  spaceAroundColumn,
  centerColumn,
  centerColumnBtn,
} from "../../../public/centerTypes";
import { contributorsStyled, descriptionStyled } from "./style";

async function fetchData(url) {
  if (url === undefined) return;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

const RepoInfo = ({ repoInfo }) => {
  let style = "";
  const { contributors_url, description, owner, name, login } = repoInfo || "";
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
    <Box style={spaceAroundColumn} sx={{ m: 1 }}>
      <Box style={spaceAroundColumn} sx={{ m: 1 }}>
        <Typography color="#ADBAC7" sx={{ mb: 1.5 }}>
          Contributors
        </Typography>

        <Box style={contributorsStyled}>
          <Stack direction="row" spacing={2} justifyContent={style}>
            {contributors.length !== 0 ? (
              contributors.map((contributor) => (
                <Contributor
                  avatar_url={contributor.avatar_url}
                  login={contributor.login}
                  key={uuidv4()}
                />
              ))
            ) : owner ? (
              <Contributor
                avatar_url={owner.avatar_url}
                login={owner.login}
                key={uuidv4()}
              />
            ) : (
              ""
            )}
          </Stack>
        </Box>
      </Box>

      <Box style={{ ...centerColumn, ...descriptionStyled }}>
        <Typography color="#ADBAC7" sx={{ mt: 1 }}>
          Description
        </Typography>
        <Typography
          color="#768390"
          sx={{ overflow: "auto", textAlign: "center" }}
        >
          {description || "---"}
        </Typography>
      </Box>

      <Box style={centerColumnBtn} sx={{ m: 2, width: "250px" }}>
        <LoveBtn login={login} name={name} />
      </Box>
    </Box>
  );
};

export default RepoInfo;
