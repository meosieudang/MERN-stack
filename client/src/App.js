import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <ItemModal />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
