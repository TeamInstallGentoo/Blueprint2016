require("styles/App.scss");

import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
import Chooser from "./ChooserComponent.js";
import Nav from "./NavComponent.js";
import Navigation from "../nav/directions.js";
import Pathfinder from "../nav/pathfinder.js";
var floor = require("../floor3.js");

class AppComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			start: "",
			destination: "",
			choosing: true,
			direction: "",
			path: [],
			directions: [],
			step: 0
		};
	}
	changeStart(e) {
		this.setState({start: e.target.value});
	}
	changeDestination(e) {
		this.setState({destination: e.target.value});
	}
	generateRoute() {
		let path = Pathfinder(floor, this.state.start, this.state.destination);
		this.setState({path});
		var directions = Navigation.getDirections(Navigation.vectorize(path));
		this.setState({directions});
		this.setState({direction: "Go " + directions[0]});
	}
	next() {
		let step = this.state.step + 1;
		this.setState({step});
		let direction = this.state.directions[step];
		if(direction) direction = "Go " + direction;
		else direction = "You have arrived at your destination.";
		this.setState({direction});
	}
	go() {
		this.generateRoute();
		this.setState({choosing: false});
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
				{
				(
					(!this.state.choosing) ? (
						<Nav direction={this.state.direction}
							next={this.next.bind(this)}
							floor={floor}
							path={this.state.path}/>
					)
					: ""
				)
				}
			</div>
		);
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
