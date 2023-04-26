import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
	state = {
		eventCount: 32,
		errorText: "",
	};

	handleInputChanged = (e) => {
		const inputValue = e.target.value;
		if (inputValue > 0 && inputValue <= 32) {
			this.props.updateEvents(null, inputValue);
			this.setState({
				eventCount: inputValue,
				errorText: "",
			});
		} else {
			this.setState({
				eventCount: inputValue,
				errorText: "Please enter a valid number of events (1-32)",
			});
		}
	};

	render() {
		return (
			<div className="NumberOfEvents">
				<label>Number of Events: </label>
				<input type="number" className="number" value={this.state.eventCount} onChange={this.handleInputChanged} />
				{this.state.errorText && <ErrorAlert text={this.state.errorText} />}
			</div>
		);
	}
}

export default NumberOfEvents;
