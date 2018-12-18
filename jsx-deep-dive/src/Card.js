import React from "react";
///////PARENT COMPONENT
//wrapping child components in this parent component
const Card = props => {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};

export default Card;
