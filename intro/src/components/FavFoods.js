import React from "react";

const FavFoods = props => {
  return (
    <section id="fav-foods">
      <h2>Favourite Foods</h2>
      {props.children}
    </section>
  );
};

export default FavFoods;
