"use strict";

import React from "react";

require("styles/Chooser.scss");

class ChooserComponent extends React.Component {
	render() {
		return (
			<div className="chooser-component">
					<div className="igroup">
						<h1>Start:</h1>
						<input type="text" placeholder="Start" value={this.props.start} onChange={this.props.changeStart}/>
					</div>
					<div className="igroup">
						<h1>Destination:</h1>
						<input type="text" placeholder="Destination" value={this.props.dest} onChange={this.props.changeDest}/>
					</div>
					<div className="igroup">
						<button onClick={this.props.go}>go</button>
					</div>
			</div>
		);
	}
}

ChooserComponent.displayName = "ChooserComponent";

// Uncomment properties you need
// ChooserComponent.propTypes = {};
// ChooserComponent.defaultProps = {};

export default ChooserComponent;
