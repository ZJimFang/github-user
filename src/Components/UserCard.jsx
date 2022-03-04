import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function UserCard() {
  return (
    <Card
      sx={{
        display: "flex",
        mt: 4,
      }}
    >
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
          <Typography component="div" variant="h5">
            Username
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            ID
          </Typography>
        </CardContent>
      </Box>

      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image="https://avatars.githubusercontent.com/u/74860733?v=4"
      />
    </Card>
  );
}

export default UserCard;
