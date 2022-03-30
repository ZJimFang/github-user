import React, { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  Toggle: {
    "&&": {
      marginRight: "15px",
      backgroundColor: "#373E47",
      color: "#ADBAC7",
      height: "35px",
      borderRadius: 3,
    },
  },
});

function storeInLocal(login, name, loved) {
  if (!loved) {
    localStorage.setItem(name, JSON.stringify({ login, name }));
  } else {
    localStorage.removeItem(name);
  }
}

const LoveBtn = ({ login, name }) => {
  const classes = useStyles();
  const [loved, setLoved] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem(name))) {
      setLoved(true);
    }
  }, [name]);

  return (
    <ToggleButton
      className={classes.Toggle}
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
