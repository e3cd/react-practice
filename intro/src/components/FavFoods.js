import React from "react";
import Pizza from "./../img/pizza.jpeg";
import Quesadilla from "./../img/quesadilla.jpeg";
import Icecream from "./../img/ice-cream.jpg";
import Fries from "./../img/fries.jpg";

const FavFoods = () => {
  return (
    <section id="fav-foods">
      <h2>Favourite Foods</h2>
      <div>
        <h4>Pizza</h4>
        <img src={Pizza} alt="pizza" />
        <p>
          Best time to eat: <span>All the time</span>
        </p>
        <p>
          Best place: <span>Queen Margharitas</span>
        </p>
      </div>
      <div>
        <h4>Quesadillas</h4>
        <img src={Quesadilla} alt="quesadilla" />
        <p>
          Best time to eat: <span>Afternoon Siesta</span>
        </p>
        <p>
          Best place: <span>Mejico</span>
        </p>
      </div>
      <div>
        <h4>Icecream Pancakes</h4>
        <img src={Icecream} alt="icecream" />
        <p>
          Best time to eat: <span>Breaky</span>
        </p>
        <p>
          Best place: <span>Pancakes on the Rocks</span>
        </p>
      </div>
      <div>
        <h4>Loaded Fries</h4>
        <img src={Fries} alt="fries" />
        <p>
          Best time to eat: <span>During the game</span>
        </p>
        <p>
          Best place: <span>My House</span>
        </p>
      </div>
    </section>
  );
};

export default FavFoods;
