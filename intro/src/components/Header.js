import React from "react";
import NavBar from "./NavBar";

const Header = props => {
  return (
    <header style={{ marginTop: "80px" }}>
      <h1>Welcome To Sandras Profile Page</h1>
      <NavBar />
    </header>
  );
};

export default Header;
