"use strict";

import React from "react";
import FloatingActionButton from "material-ui/lib/floating-action-button";
import Walk from "material-ui/lib/svg-icons/maps/directions-walk";
require("styles/Nav.scss");

class NavComponent extends React.Component {
	componentDidMount() {
		var ctx = this.refs.canvas.getContext("2d");
		this.props.floor.forEach((row, r) => {
			row.forEach((col, c) => {
				if(col != 1) ctx.fillRect(r*10, c*10, 10, 10);
			});
		});
		ctx.fillStyle = "#5038E6";
		this.props.path.forEach((dot) => {
			ctx.fillRect(dot[0] * 10, dot[1] * 10, 10, 10);
		});
		window.addEventListener("deviceorientation", (e) => {
			console.log(e.alpha);
		});
	}
	render() {
		return (
			<div className="nav-component">
				<div className="direction"><h1>{this.props.direction}</h1></div>
				<div className="next">
					<FloatingActionButton backgroundColor="#36ACF6" onClick={this.props.next}>
							<Walk />
					</FloatingActionButton>
				</div>
				<canvas ref="canvas"></canvas>
			</div>
		);
	}
}

NavComponent.displayName = "NavComponent";

// Uncomment properties you need
// NavComponent.propTypes = {};
// NavComponent.defaultProps = {};

export default NavComponent;
