import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Search from "../Search/Search";
import { centerRow, spaceBetween } from "../../../public/centerTypes";
import { favoriteIcon, NavContainer, githubIcon } from "./style";

const Nav = ({ setUserInfo, setIsConnect }) => {
  return (
    <Box style={{ ...spaceBetween, ...NavContainer }}>
      <a href={`/`}>
        <GitHubIcon style={githubIcon} />
      </a>
      <Box style={centerRow}>
        <Search setUserInfo={setUserInfo} setIsConnect={setIsConnect} />
        <Box component={RouterLink} to={`/favorites`}>
          <Tooltip title={"Love"} placement="top">
            <FavoriteIcon style={favoriteIcon} />
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
