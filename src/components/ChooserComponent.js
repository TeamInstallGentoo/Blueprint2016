"use strict";

import React from "react";

require("styles/Chooser.scss");
import RaisedButton from "material-ui/lib/raised-button";

class ChooserComponent extends React.Component {
	componentDidMount() {
		this.renderCanvas();
	}
	renderCanvas() {
		var ctx = this.refs.cv.getContext("2d");
		ctx.clearRect(0, 0, this.refs.cv.width, this.refs.cv.height);
		this.props.floor.forEach((row, r) => {
			row.forEach((col, c) => {
				if (col != 0 && col != 1) ctx.fillStyle = "#FF8D06";
				else ctx.fillStyle = "#595959";
				if(col != 0) ctx.fillRect(r*10, c*10, 10, 10);
			});
		});
	}
	componentDidUpdate() {
		this.renderCanvas();
	}
	render() {
		return (
			<div className="chooser-component">
					<div className="igroup">
      <select value={this.props.map} onChange={this.props.changeMap}>
       <option value="maze">Maze</option>
        <option value="maze2">Maze 2</option>
        <option value="2">Second Floor</option>
         <option value="3">Third Floor</option>
          <option value="auditorium">auditorium</option>
      </select>
					</div>
					<div className="igroup">
						<input type="text" placeholder="Start" value={this.props.start} onChange={this.props.changeStart}/>
					</div>
					<div className="igroup">
						<input type="text" placeholder="Destination" value={this.props.dest} onChange={this.props.changeDest}/>
					</div>
					<div className="igroup">
						<RaisedButton onClick={this.props.go} label="Go"/>
					</div>
					<div className="igroup">
						<canvas width="610" height="610" ref="cv"></canvas>
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
