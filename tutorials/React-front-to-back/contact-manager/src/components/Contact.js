import React, { Component } from "react";
import PropTypes from "prop-types";

//class component use rcc tab

//to access props of class component need to use this.props
class Contact extends Component {
  //change state
  state = {
    showContactInfo: false //if email and ph should be shown
  };
  //eventlistener method
  //   onShowClick = e => {
  //     //update the state using setState, setting opposite of current state
  //     this.setState({ showContactInfo: !this.state.showContactInfo });
  //   };
  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };

  render() {
    //use destructuring to remove this.
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={() => {
              this.setState({ showContactInfo: !this.state.showContactInfo });
            }}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick}
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

//validate the property of the contact, typechecking
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
