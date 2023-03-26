// App.js

import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";

class App extends Component {
  state = {
    events: [],
    locations: [],
  };

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}
8;

export default App;
