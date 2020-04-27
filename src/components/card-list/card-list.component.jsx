import React from "react";
import Card from "../card/card.component";

import "./card-list.style.css";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.avatars.map((m) => (
        <Card key={m.id} avatar={m}></Card>
      ))}
    </div>
  );
};

export default CardList;
