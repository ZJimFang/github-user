import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardContent, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { centerRow } from "./centerTypes";

const useStyles = makeStyles({
  cardContainer: {
    "&&": {
      width: "350px",
      height: "150px",
      backgroundColor: "#3A3C47",
      border: "1px solid black",
      "background-color": "#3A3C47",
    },
  },
  cardMedia: {
    "&&": {
      width: 100,
      height: 100,
      borderRadius: "50%",
      border: "1px solid black",
    },
  },
  reposNum: {
    "&&": {
      borderRadius: "2rem",
      textAlign: "center",
      backgroundColor: "#768390",
      color: "#ADBAC7",
      marginLeft: "13px",
      padding: "0 6px",
      minWidth: 15,
      fontSize: "13px",
      fontHeight: "12px",
      fontWeight: "400px",
    },
  },
});

const UserCard = ({ user }) => {
  const classes = useStyles();

  const { avatar_url, login, name, public_repos } = user;

  return (
    <CardActionArea component={RouterLink} to={`/users/${login}/repos`}>
      <Card className={classes.cardContainer} style={centerRow}>
        <CardMedia className={classes.cardMedia} image={avatar_url} />
        <CardContent>
          <Typography component="div" variant="h5" color="#CDD9E5">
            {name || "-"}
            <Typography component="div" variant="subtitle1" color="#768390">
              {login}
            </Typography>
          </Typography>
          <Typography style={centerRow} variant="subtitle1" color="#768390">
            Repositories
            <Typography className={classes.reposNum}>{public_repos}</Typography>
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default UserCard;
