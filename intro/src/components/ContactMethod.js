import React from "react";

const ContactMethod = props => {
  return (
    <p>
      <b>{props.method}</b> <i>{props.details}</i>
    </p>
  );
};

export default ContactMethod;
