import "./../SeasonDisplay.css";
import React from "react";

//use this object to destructure and get properties
const seasonConfig = {
  summer: {
    text: "It is hot!",
    iconName: "sun"
  },
  winter: {
    text: "It is cold!",
    iconName: "snowflake"
  }
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  //props contains user latitude in the state, state is being updated by setState and STATE is now being passed down as a prop
  //   console.log(props.latitude);

  const season = getSeason(props.latitude, new Date().getMonth());

  const { text, iconName } = seasonConfig[season];

  console.log(season);
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
