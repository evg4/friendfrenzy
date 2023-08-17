import React from "react";
import { useState } from "react";
import Name from "./name";
import Photo from "./photo";
import Info from "./info";
import LoveButton from "./loveButton";

function Card(cardProps) {
  const [love, setLove] = useState(0);

  function handleLoveClick(e) {
    let personClicked = e.target.name;
    alert("You have sent some love to " + personClicked + "!");
    setLove((prevLove) => prevLove + 1);
  }

  return (
    <div className="card">
      <Name name={cardProps.details.name} />
      <Photo img={cardProps.details.img} />
      <Info
        age={cardProps.details.info.age}
        gender={cardProps.details.info.gender}
      />
      <p>Love received: {love}</p>
      <LoveButton onClick={handleLoveClick} name={cardProps.details.name} />
    </div>
  );
}

export default Card;
