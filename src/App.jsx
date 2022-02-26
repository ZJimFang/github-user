import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import { fetchUserAPI } from "./module/fetch";
import "./style/App.css";

const App = () => {
  //default
  const [user, setUser] = useState("ZJimFang");
  const [data, setData] = useState({});

  useEffect(() => {
    fetchUserAPI(user).then((data) => setData(data));
  }, [user]);

  console.log(data);

  return <Search setUser={setUser} />;
};

export default App;
