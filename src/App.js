import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      // move search field to the State in order to keep track of data 
      searchField: "",
    };
    console.log('constructor')

  
  }
 
  componentDidMount() {
    console.log('conponentDidMount')
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    console.log("I Changed");
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
    console.log(this.state);
  };

  render() {
    console.log("render")

    const{monsters, searchField} = this.state;
    const{onSearchChange}= this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
