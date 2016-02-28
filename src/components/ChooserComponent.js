"use strict";

import React from "react";

require("styles/Chooser.scss");
import RaisedButton from "material-ui/lib/raised-button";

class ChooserComponent extends React.Component {
	render() {
		return (
			<div className="chooser-component">
					<div className="igroup">
						<input type="text" placeholder="Start" value={this.props.start} onChange={this.props.changeStart}/>
					</div>
					<div className="igroup">
						<input type="text" placeholder="Destination" value={this.props.dest} onChange={this.props.changeDest}/>
					</div>
					<div className="igroup">
						<RaisedButton onClick={this.props.go} label="Go"/>
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
