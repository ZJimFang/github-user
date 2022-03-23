import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";

const LoveBtn = () => {
  const [loved, setLoved] = useState(false);
  return (
    <ToggleButton
      sx={{
        mx: 2,
        backgroundColor: "#373E47",
        color: "#ADBAC7",
        height: "35px",
        borderRadius: 3,
      }}
      value="check"
      selected={loved}
      onChange={() => {
        setLoved(!loved);
      }}
    >
      <FavoriteIcon sx={{ fontSize: "18px" }} className="favorite" />
      <Typography sx={{ mx: 1, fontSize: "13px" }}>
        {loved ? "Loved" : "Love"}
      </Typography>
    </ToggleButton>
  );
};

export default LoveBtn;
