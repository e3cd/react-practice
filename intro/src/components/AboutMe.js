import React from "react";

const AboutMe = props => {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <img src={props.image} alt="its me" />
      <article>
        <ol>{props.children}</ol>
      </article>
    </section>
  );
};

export default AboutMe;
