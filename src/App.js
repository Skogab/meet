// App.js

import React, { Component } from "react";
import "./nprogress.css";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";

class App extends Component {
	state = {
		events: [],
		locations: [],
		numberOfEvents: 32,
		selectedLocation: "all",
	};

	componentDidMount() {
		this.mounted = true;
		getEvents().then((events) => {
			if (this.mounted) {
				this.setState({
					events: events,
					locations: extractLocations(events),
				});
			}
		});
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	updateEvents = (location, inputNumber) => {
		const { numberOfEvents, selectedLocation } = this.state;
		if (location) {
			getEvents().then((events) => {
				const locationEvents = location === "all" ? events : events.filter((event) => event.location === location);
				const eventsToShow = locationEvents.slice(0, numberOfEvents);
				this.setState({
					events: eventsToShow,
					selectedLocation: location,
				});
			});
		} else {
			getEvents().then((events) => {
				const locationEvents =
					selectedLocation === "all" ? events : events.filter((event) => event.location === selectedLocation);
				const eventsToShow = locationEvents.slice(0, inputNumber);
				this.setState({
					events: eventsToShow,
					numberOfEvents: inputNumber,
				});
			});
		}
	};

	render() {
		return (
			<div className="App">
				<CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
				<EventList events={this.state.events} />
				<NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
			</div>
		);
	}
}

export default App;
