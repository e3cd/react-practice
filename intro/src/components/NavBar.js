import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

const styles = {
  ul: {
    listStyleType: "none"
  },
  li: {
    display: "inline",
    marginRight: "15px"
  }
};

const NavBar = () => {
  return (
    <nav>
      <AppBar color="default">
        <ul style={styles.ul}>
          <li style={styles.li}>
            <a href="#about-me">
              <Button color="secondary">About me</Button>
            </a>
          </li>
          <li style={styles.li}>
            <a href="#fav-foods">
              <Button color="secondary">Favourite Foods</Button>
            </a>
          </li>
          <li style={styles.li}>
            <a href="#contact">
              <Button color="secondary">Contact Details</Button>
            </a>
          </li>
        </ul>
      </AppBar>
    </nav>
  );
};

export default NavBar;
