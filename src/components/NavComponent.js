"use strict";

import React from "react";
import FloatingActionButton from "material-ui/lib/floating-action-button";
import Walk from "material-ui/lib/svg-icons/maps/directions-walk";
require("styles/Nav.scss");

class NavComponent extends React.Component {
	componentDidMount() {
		this.renderCanvas();
		window.addEventListener("deviceorientation", function(eventData) {
		// gamma: Tilting the device from left to right. Tilting the device to the right will result in a positive value.
		// gamma: Het kantelen van links naar rechts in graden. Naar rechts kantelen zal een positieve waarde geven.
			var tiltLR = eventData.gamma;

		// beta: Tilting the device from the front to the back. Tilting the device to the front will result in a positive value.
		// beta: Het kantelen van voor naar achteren in graden. Naar voren kantelen zal een positieve waarde geven.
			var tiltFB = eventData.beta;

		// alpha: The direction the compass of the device aims to in degrees.
		// alpha: De richting waarin de kompas van het apparaat heen wijst in graden.
			var dir = eventData.alpha;

		// Call the function to use the data on the page.
		// Roep de functie op om de data op de pagina te gebruiken.
			deviceOrientationHandler(tiltLR, tiltFB, dir);
		}, false);

		function deviceOrientationHandler(tiltLR, tiltFB, dir) {
			document.getElementById("tiltLR").innerHTML = Math.ceil(tiltLR);
			document.getElementById("tiltFB").innerHTML = Math.ceil(tiltFB);
			document.getElementById("direction").innerHTML = Math.ceil(dir);

			// Rotate the disc of the compass.
			// Laat de kompas schijf draaien.
			var compassDisc = this.refs.canvas;
			compassDisc.style.webkitTransform = "rotate("+ dir +"deg)";
			compassDisc.style.MozTransform = "rotate("+ dir +"deg)";
			compassDisc.style.transform = "rotate("+ dir +"deg)";
		}
	}
	renderCanvas() {
		var ctx = this.refs.canvas.getContext("2d");
		ctx.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
		var coord = this.props.coord;
		//dims = 20x20
		var corner = [coord[0] - 10, coord[1] - 10];
		this.props.floor.forEach((row, r) => {
			row.forEach((col, c) => {
				if (col != 0 && col != 1) ctx.fillStyle = "#FF8D06";
				else ctx.fillStyle = "#595959";
				if(col != 0) ctx.fillRect(c*10 - corner[0] * 10, r*10 - corner[1] * 10, 10, 10);
			});
		});
		ctx.fillStyle = "#5038E6";
		this.props.path.forEach((dot) => {
			ctx.fillRect(dot[0] * 10 - corner[0] * 10, dot[1] * 10 - corner[1] * 10, 10, 10);
		});
		if(this.props.coord) {
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(coord[0] * 10 - corner[0] * 10, coord[1] * 10 - corner[1] * 10, 10, 10);
		}
	}
	componentDidUpdate() {
		this.renderCanvas();
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
				<canvas width="200" height="200" style={{border: "1px solid black"}} ref="canvas"></canvas>
			</div>
		);
	}
}

NavComponent.displayName = "NavComponent";

// Uncomment properties you need
// NavComponent.propTypes = {};
// NavComponent.defaultProps = {};

export default NavComponent;
