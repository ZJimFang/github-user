import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../style/userCard.scss";

function UserCard({ avatar, name, userName, repos }) {
  return (
    <CardActionArea className="userCard">
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          width: 300,
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
            m: 3,
          }}
          image={avatar}
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
                color: "#ADBACA",
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "#768390" }}
            >
              {userName}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </CardActionArea>
  );
}

export default UserCard;
