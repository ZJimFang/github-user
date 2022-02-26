import React, { useState } from "react";

const Search = ({ setUser }) => {
  const [text, setText] = useState();

  function change(event) {
    setText(event.target.value);
  }

  function send() {
    setUser(text);
  }

  return (
    <>
      <input type="search" onChange={change}></input>
      <input type="button" onClick={send} value="send"></input>
    </>
  );
};

export default Search;
