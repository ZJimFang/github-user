import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  CardActionArea,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: "flex",
    alignItems: "center",
    width: 290,
    height: 150,
    backgroundColor: "#3A3C47",
    border: "1px solid black",
  },
  reposNum: {
    ml: 1,
    px: "6px",
    minWidth: 15,
    fontSize: "12px",
    fontHeight: "12px",
    fontWeight: "400px",
    borderRadius: "2rem",
    textAlign: "center",
    backgroundColor: "#768390",
    color: "#ADBAC7",
  },
}));

const UserCard = ({ user }) => {
  const classes = useStyles();
  const { avatar_url, login, name, public_repos } = user;
  return (
    <CardActionArea
      className="userCard"
      component={RouterLink}
      to={`/users/${login}/repos`}
    >
      <Card
        style={{ backgroundColor: "#3A3C47" }}
        className={classes.cardContainer}
      >
        <CardMedia
          sx={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            border: "1px solid black",
            m: 2,
          }}
          image={avatar_url}
          component="img"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent>
            <Typography
              component="div"
              sx={{
                fontSize: "28px",
                color: "#CDD9E5",
              }}
            >
              {name || "-"}
              <Typography
                component="div"
                sx={{
                  color: "#768390",
                }}
              >
                {login}
              </Typography>
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                color: "#768390",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Repositories
              <Typography
                sx={{
                  ml: 1,
                  px: "6px",
                  minWidth: 15,
                  fontSize: "12px",
                  fontHeight: "12px",
                  fontWeight: "400px",
                  borderRadius: "2rem",
                  textAlign: "center",
                  backgroundColor: "#768390",
                  color: "#ADBAC7",
                }}
              >
                {public_repos}
              </Typography>
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </CardActionArea>
  );
};

export default UserCard;
