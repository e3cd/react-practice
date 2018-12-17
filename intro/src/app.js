import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import FavFoods from "./components/FavFoods";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const app = () => {
  return (
    <div>
      <Header />
      <div>
        <AboutMe />
        <div>
          <FavFoods />
          <div>
            <Contact />
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default app;
