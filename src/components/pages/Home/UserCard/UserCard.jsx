import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardContent } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { centerRow } from "../../../public/centerTypes";
import { cardContainer, cardMediaStyled, reposNum } from "./style";

const UserCard = ({ user }) => {
  const { avatar_url, login, name, public_repos } = user;

  return (
    <CardActionArea component={RouterLink} to={`/users/${login}/repos`}>
      <Card style={{ ...cardContainer, ...centerRow }}>
        <CardMedia style={cardMediaStyled} image={avatar_url} />
        <CardContent>
          <Typography component="div" variant="h5" color="#CDD9E5">
            {name || "-"}
            <Typography component="div" variant="subtitle1" color="#768390">
              {login}
            </Typography>
          </Typography>
          <Typography style={centerRow} variant="subtitle1" color="#768390">
            Repositories
            <Typography style={reposNum}>{public_repos}</Typography>
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default UserCard;
