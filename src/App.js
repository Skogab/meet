// App.js

import React, { Component } from "react";
import "./nprogress.css";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { OfflineAlert } from "./Alert";
import WelcomeScreen from "./WelcomeScreen";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";

class App extends Component {
	state = {
		events: [],
		locations: [],
		numberOfEvents: 32,
		selectedLocation: "all",
		offlineText: "",
		showWelcomeScreen: undefined,
	};

	async componentDidMount() {
		this.mounted = true;
		const accessToken = localStorage.getItem("access_token");
		const isTokenValid = (await checkToken(accessToken)).error ? false : true;
		const searchParams = new URLSearchParams(window.location.search);
		const code = searchParams.get("code");
		this.setState({ showWelcomeScreen: !(code || isTokenValid) });
		if ((code || isTokenValid) && this.mounted) {
			getEvents().then((events) => {
				if (this.mounted) {
					events = events.slice(0, this.state.numberOfEvents);
					this.setState({ events, locations: extractLocations(events) });
				}
			});
		}
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
		if (this.state.showWelcomeScreen === undefined) {
			return <div className="App" />;
		}

		return (
			<div className="App">
				<CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
				<NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
				<EventList events={this.state.events} />
				{!navigator.onLine ? (
					<OfflineAlert text={"You are offline, the displayed list has been loaded from the cache"} />
				) : null}
				<WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={getAccessToken} />
			</div>
		);
	}
}

export default App;
