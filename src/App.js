import { useState, useEffect } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"Search Monster"}
      />

      <CardList monsters={filteredMonsters} />

      {/* {filteredMonsters.map((monster) => {
        return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        );
      })} */}
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       // move search field to the State in order to keep track of data
//       searchField: "",
//     };
//     console.log("constructor");
//   }

//   componentDidMount() {
//     console.log("conponentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     console.log("I Changed");
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//     console.log(this.state);
//   };

//   render() {
//     console.log("render");
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder={"Search Monster"}
//         />
//         {/* {filteredMonsters.map((monster) => {
//           return (
//             <div key={monster.id}>
//               <h1>{monster.name}</h1>
//             </div>
//           );
//         })} */}

//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
