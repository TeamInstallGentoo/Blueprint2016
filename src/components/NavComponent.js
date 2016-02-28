"use strict";

import React from "react";
import FloatingActionButton from "material-ui/lib/floating-action-button";
import Walk from "material-ui/lib/svg-icons/maps/directions-walk";
require("styles/Nav.scss");

class NavComponent extends React.Component {
	render() {
		return (
			<div className="nav-component">
				<div className="direction"><h1>{this.props.direction}</h1></div>
				<div className="next">
					<FloatingActionButton backgroundColor="#36ACF6" onClick={this.props.next}>
							<Walk />
					</FloatingActionButton>
				</div>
			</div>
		);
	}
}

NavComponent.displayName = "NavComponent";

// Uncomment properties you need
// NavComponent.propTypes = {};
// NavComponent.defaultProps = {};

export default NavComponent;
