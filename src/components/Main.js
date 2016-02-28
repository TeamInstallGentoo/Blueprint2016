require("styles/App.scss");

import React from "react";
import Chooser from "./ChooserComponent.js";

class AppComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			start: "",
			destination: "",
			choosing: true
		};
	}
	changeStart(e) {
		this.setState({start: e.target.value});
	}
	changeDestination(e) {
		this.setState({destination: e.target.value});
	}
	go() {

	}
	render() {
		return (
			<div>
				{((this.state.choosing) ? (
				<Chooser start={this.state.start}
					dest={this.state.destination}
					changeStart={this.changeStart.bind(this)}
					changeDest={this.changeDestination.bind(this)}
					go={this.go.bind(this)}/>)
				: "")}
			</div>
		);
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
