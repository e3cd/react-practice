import React from "react";

const Contact = props => {
  return (
    <div>
      <h2>Contact Details</h2>

      <section id="contact">{props.children}</section>
    </div>
  );
};

export default Contact;
