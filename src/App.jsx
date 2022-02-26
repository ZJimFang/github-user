import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./Components/Search";

async function fetchUserAPI(userName) {
  const res = await fetch(`https://api.github.com/users/${userName}`);
  if (!res.ok) {
    throw new Error("user not found");
  }
  return await res.json();
}

const App = () => {
  const [user, setUser] = useState("ZJimFang");

  useEffect(() => {
    fetchUserAPI(user)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return <Search setUser={setUser} />;
};

export default App;
