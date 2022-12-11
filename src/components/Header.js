import React from "react";

export default function Header() {
  return (
    <div className="header-container">
      <img
        src={require("../images/meme-icon.png")}
        alt="Meme icon in header"
        id="meme-icon"
      />
      <h1>Meme Generator</h1>
      <h3>A React Project</h3>
    </div>
  );
}
