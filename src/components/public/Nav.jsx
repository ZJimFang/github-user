import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Search from "./Search";
import { centerRow, spaceBetween } from "./centerTypes";

const favoriteIcon = {
  border: "1px solid #A72608",
  padding: "8px",
  margin: "0 10px",
  color: "#A72608",
  borderRadius: "10px",
  cursor: "pointer",
};

const Nav = ({ setUserInfo, setIsConnect }) => {
  return (
    <Box style={spaceBetween} sx={{ height: 60, my: 2 }}>
      <a href={`/`}>
        <GitHubIcon sx={{ fontSize: "45px", mx: 3 }} />
      </a>
      <Box style={centerRow}>
        <Search setUserInfo={setUserInfo} setIsConnect={setIsConnect} />
        <Box component={RouterLink} to={`/favorites`}>
          <Tooltip title={"Love"} placement="top">
            <FavoriteIcon style={{ ...favoriteIcon }} />
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
