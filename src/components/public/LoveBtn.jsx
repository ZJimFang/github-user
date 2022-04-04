import React, { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";

const Toggle = {
  marginRight: "15px",
  backgroundColor: "#373E47",
  color: "#ADBAC7",
  height: "35px",
  borderRadius: 3,
};

function storeInLocal(login, name, loved) {
  //With the state of love store/delete in localStorage
  if (!loved) {
    localStorage.setItem(name, JSON.stringify({ login, name }));
  } else {
    localStorage.removeItem(name);
  }
}

const LoveBtn = ({ login, name }) => {
  const [loved, setLoved] = useState(false);

  //if LocalStorage has this value then change Love default state
  useEffect(() => {
    if (JSON.parse(localStorage.getItem(name))) {
      setLoved(true);
    }
  }, [name]);

  return (
    <ToggleButton
      style={{ ...Toggle }}
      value="check"
      selected={loved}
      onChange={() => {
        setLoved(!loved);
        storeInLocal(login, name, loved);
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
