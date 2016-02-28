require("styles/App.scss");

import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
import Chooser from "./ChooserComponent.js";
import Nav from "./NavComponent.js";
import Pathfinder from "../nav/pathfinder.js";
var floor = require("../floor3.js");

class AppComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			start: "",
			destination: "",
			choosing: true,
			direction: "Go left",
			path: []
		};
	}
	changeStart(e) {
		this.setState({start: e.target.value});
	}
	changeDestination(e) {
		this.setState({destination: e.target.value});
	}
	generateRoute() {

	}
	next() {
		this.setState({direction: "Poop"});
	}
	go() {
		this.generateRoute();
		this.setState({choosing: false});
		this.setState({path: Pathfinder(floor, this.state.start, this.state.destination)});
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
