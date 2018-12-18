import React from "react";

const Food = props => {
  return (
    <div>
      <h4>{props.food}</h4>
      <img src={props.image} alt={props.food} />
      <p>
        Best time to eat: <span>{props.time}</span>
      </p>
    </div>
  );
};

export default Food;
