import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todos</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  textAlign: "center",
  padding: "10px",
  color: "white",
};

const linkStyle = {
  color: "white",
};
