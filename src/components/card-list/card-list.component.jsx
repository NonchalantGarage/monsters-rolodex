import React from "react";
import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => {
          const { id, name, email } = monster;

          return (
            <div classname="card-container" key={id}>
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
