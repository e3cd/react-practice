import React from "react";

const Interests = () => {
  const data = [
    {
      title: "Pop",
      description:
        "culture maven. Beer fan. Award-winning music junkie. Extreme coffee enthusiast. Thinker. Tv specialist."
    },
    {
      title: "Friendly",
      description:
        "web maven. Bacon lover. General internet specialist. Incurable travel scholar."
    },
    {
      title: "Subtly",
      description:
        "charming twitter lover. Social media fan. Incurable travel geek. Lifelong pop culture specialist. Tv scholar."
    },
    {
      title: "Unable",
      description:
        "to type with boxing gloves on. Proud bacon fan. Music junkie. Coffee ninja. Beer specialist."
    }
  ];

  const listItems = data.map(data => (
    <li key={data.title}>
      <b>{data.title}</b> {data.description}
    </li>
  ));

  return <div>{listItems}</div>;
};

export default Interests;
