import React from "react";

export default function Contact(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
  };

  return (
    <div className="continer" style={myStyle}>
      <h2>Contact Us</h2>
    </div>
  );
}
