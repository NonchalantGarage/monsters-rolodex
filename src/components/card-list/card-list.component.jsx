import React from "react";

import "./card-list.styles.css";
import CardContainer from "../card-container/card-container.component";

function CardList ({monsters}){
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardContainer monster={monster} />;
        })}
      </div>
    );
  }

export default CardList;
