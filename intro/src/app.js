import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import FavFoods from "./components/FavFoods";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Food from "./components/Food";
import Interests from "./components/Interests";
import ContactMethod from "./components/ContactMethod";

const app = () => {
  return (
    <div>
      <Header />
      <AboutMe image="img/profile_pic.jpg">
        <Interests />
      </AboutMe>
      <FavFoods>
        <Food
          food="Pizza"
          image="img/pizza.jpeg"
          time="All the time"
          place="Queen Margharitas"
        />

        <Food
          food="Quesadillas"
          image="img/quesadilla.jpeg"
          time="Afternoon Siesta"
          place="Mejico"
        />
        <Food
          food="Icecream Pancakes"
          image="img/ice-cream.jpg"
          time="Breaky"
          place="Pancakes on the Rocks"
        />
        <Food
          food="Loaded Fries"
          image="img/fries.jpg"
          time="During the game"
          place="My House"
        />
      </FavFoods>
      <Contact>
        <ContactMethod method="Phone:" details="+12345678" />
        <ContactMethod method="Email:" details="thatsme@test.com" />
        <ContactMethod method="Twitter:" details="#superfun" />
      </Contact>
      <Footer />
    </div>
  );
};

export default app;
