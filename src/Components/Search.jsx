import React, { useState } from "react";

const Search = () => {
  let [text, setText] = useState("");

  function change(event) {
    setText(event.target.value);
  }

  return <input type="search" onChange={change}></input>;
};

export default Search;
