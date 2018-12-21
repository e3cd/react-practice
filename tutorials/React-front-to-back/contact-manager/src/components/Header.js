import React from "react";
import PropTypes from "prop-types";

//functioncal component use rfc tab

//to get props to functional component need to pass in props in function
const Header = props => {
  //use destructuring to pull branding from props and make dry
  const { branding } = props;
  return (
    <nav className="navbar nav-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

//set default property of header to my app
Header.defaultProps = {
  branding: "My App"
};
//validate property of header
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

//styling variables
// const headingStyle = {
//   color: "red",
//   fontSize: "50px"
// };

export default Header;
