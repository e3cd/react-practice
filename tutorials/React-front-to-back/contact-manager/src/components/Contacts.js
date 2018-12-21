//class based component as it has state

import React, { Component } from "react";
// display a contact component for each iteration, for each contact in the state
import Contact from "./Contact";

class Contacts extends Component {
  //to add state

  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555"
      },
      {
        id: 2,
        name: "Tony Montana",
        email: "test@gmail.com",
        phone: "555-555-44"
      },
      {
        id: 3,
        name: "kentavious",
        email: "123@gmail.com",
        phone: "555-555-55"
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
