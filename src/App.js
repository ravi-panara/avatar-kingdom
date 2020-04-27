import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      avatars: [],
      searchString: "",
    };
  }

  // state = {
  //   avatars: [],
  //   searchString: "",
  // };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => this.setState({ avatars: users }));
  }

  onSearch = (e) => {
    this.setState({ searchString: e.target.value });
  };
  render() {
    const { avatars, searchString } = this.state;
    const filteredAvatars = avatars.filter((avatar) =>
      avatar.name.toLowerCase().includes(searchString.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Avatar Kingdom</h1>
        <SearchBox
          placeholder="search avatars"
          //handleChange={(e) => this.setState({ searchString: e.target.value })}
          handleChange={this.onSearch}
        />
        <CardList avatars={filteredAvatars} />
      </div>
    );
  }
}

export default App;
