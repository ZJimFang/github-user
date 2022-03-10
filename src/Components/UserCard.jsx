import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function UserCard({ user }) {
  const { avatar_url, login, name, public_repos } = user;

  return (
    <CardActionArea className="userCard">
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          width: 290,
          height: 150,
          p: 0.5,
          backgroundColor: "#3A3C47",
          border: "1px solid black",
          borderRadius: 2,
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            border: "1px solid black",
            m: 2,
          }}
          image={avatar_url}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "start-begin",
              justifyContent: "center",
              flexDirection: "column",
              flex: "1 0 auto",
            }}
          >
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
}

export default UserCard;
