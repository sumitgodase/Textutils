import React from "react";

export default function Home(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
  };
  return (
    <div className="continer" style={myStyle}>
      <h2>
        Welcome to CodeWith<i>MS#7</i>!
      </h2>
    </div>
  );
}
